import re, sys, os, math
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")
out = sys.argv[1]; os.makedirs(out, exist_ok=True)
W = open(f"{ROOT}/public/brand/willist-logo.svg").read()
I = open(f"{ROOT}/public/brand/ing-logo.svg").read()
T_PATH = re.findall(r'<path d="([^"]+)"', W)[1].split("Z")[0] + "Z"
G_DESC = re.findall(r'<path d="(M136[^"]+)"', I)[0]

def bez(p0, p1, p2, p3, t):
    u = 1 - t
    return tuple(u**3*a + 3*u*u*t*b + 3*u*t*t*c + t**3*d for a, b, c, d in zip(p0, p1, p2, p3))

def sample(chain, n=80):
    pts = [chain[0]]
    for i in range(1, len(chain), 3):
        p0, p1, p2, p3 = chain[i-1], chain[i], chain[i+1], chain[i+2]
        for k in range(1, n + 1):
            pts.append(bez(p0, p1, p2, p3, k / n))
    # arc length
    L = [0.0]
    for a, b in zip(pts, pts[1:]):
        L.append(L[-1] + math.dist(a, b))
    return pts, [l / L[-1] for l in L], L[-1]

def normal(pts, i):
    a = pts[max(i-1, 0)]; b = pts[min(i+1, len(pts)-1)]
    dx, dy = b[0]-a[0], b[1]-a[1]; d = math.hypot(dx, dy) or 1
    return (-dy/d, dx/d)

def interp(prof, s):
    for (s0, w0), (s1, w1) in zip(prof, prof[1:]):
        if s <= s1:
            t = (s - s0) / (s1 - s0) if s1 > s0 else 0
            t = t*t*(3-2*t)
            return w0 + (w1-w0)*t
    return prof[-1][1]

def fmt(ps):
    return "M" + " L".join(f"{x:.2f} {y:.2f}" for x, y in ps) + " Z"

class Stroke:
    def __init__(self, chain, prof):
        self.pts, self.s, self.len = sample(chain)
        self.prof = prof
        self.ns = [normal(self.pts, i) for i in range(len(self.pts))]
    def at(self, s, side):  # side in [-1,1] across width
        # find index
        i = min(range(len(self.s)), key=lambda k: abs(self.s[k]-s))
        p, n = self.pts[i], self.ns[i]
        w = interp(self.prof, s) / 2
        return (p[0] + n[0]*w*side, p[1] + n[1]*w*side)
    def outline(self, s0=0, s1=1):
        idx = [i for i, v in enumerate(self.s) if s0 <= v <= s1]
        L = [self.at(self.s[i], 1) for i in idx]
        R = [self.at(self.s[i], -1) for i in idx][::-1]
        return fmt(L + R)
    def stripe(self, c, length, skew, taper=0.25, reach=1.15):
        # 비스듬한 호랑이 줄무늬: 한쪽은 넓고 반대쪽으로 가늘어진다
        side_pts_a, side_pts_b = [], []
        steps = 14
        for k in range(steps + 1):
            q = -reach + 2*reach*k/steps           # across width
            half = length/2 * (1 - (1-taper) * (q + reach) / (2*reach))
            mid = c + skew * q
            side_pts_a.append(self.at(mid - half, q))
            side_pts_b.append(self.at(mid + half, q))
        return fmt(side_pts_a + side_pts_b[::-1])

RX = 184
def rel(pts): return [(RX + x, y) for x, y in pts]
# r의 어깨부터 꼬리 끝까지 한 줄기 — 오른쪽으로 나가 살짝 내려앉았다가 오른쪽 위로 솟아 안쪽으로 말린다
CHAIN = rel([(0, 78), (1, 61), (13, 51), (26, 51),
             (36, 51), (43, 54), (51, 49),
             (59, 43), (66, 33), (66, 22),
             (66, 10), (58, 3), (49, 5),
             (42, 7), (40, 13), (44, 17)])
PROF = [(0, 14), (0.3, 14), (0.55, 14.5), (0.85, 11.5), (1, 9.5)]
R = Stroke(CHAIN, PROF)
END = CHAIN[-1]

def t_shape(fill, dx=-189):
    return f'<path transform="translate({15+dx} {5-110})" d="{T_PATH}" fill="{fill}"/>'

def g_shapes(c):
    return (f'<g fill="none" stroke="{c}" stroke-width="14" stroke-linecap="round">'
            f'<circle cx="121" cy="72" r="22"/><path d="M143 52V102"/></g>'
            f'<path d="{G_DESC}" fill="{c}"/>')

SEAM = 0.42
STRIPES = [(SEAM, .065, .03, .12), (0.56, .065, .035, .12), (0.69, .06, .035, .12), (0.815, .055, -.03, .12)]

def r_shape(body, tail, stripe, ball, join=False, gid="r"):
    s = f'<clipPath id="{gid}c"><path d="{R.outline()}"/></clipPath>'
    s += f'<path d="M{RX} 103V70" stroke="{body}" stroke-width="14" stroke-linecap="round" fill="none"/>'
    s += f'<path d="{R.outline()}" fill="{body}"/>'
    # 몸통색에서 호박색으로 바뀌는 경계는 첫 줄무늬 밑에 숨긴다
    s += f'<path d="{R.outline(SEAM - 0.01, 1)}" fill="{tail}"/>'
    if stripe:
        s += f'<g clip-path="url(#{gid}c)" fill="{stripe}">' + "".join(R.stripe(*st) and f'<path d="{R.stripe(*st)}"/>' for st in STRIPES) + '</g>'
    # 호랑이 꼬리 끝은 검다: 마지막 마디부터 칠해 공 모양 끝과 잇는다
    s += f'<path d="{R.outline(0.9, 1)}" fill="{ball}"/>'
    s += f'<circle cx="{END[0]:.2f}" cy="{END[1]:.2f}" r="6.8" fill="{ball}"/>'
    return s

def defs(body_c, tail_c):
    return f'''<defs>
<linearGradient id="tl" gradientUnits="userSpaceOnUse" x1="{RX+50}" y1="58" x2="{RX+70}" y2="6"><stop offset="0" stop-color="#ffcf94"/><stop offset="1" stop-color="{tail_c}"/></linearGradient>
<linearGradient id="emt" href="#em" gradientTransform="translate(174 105)"/>
<linearGradient id="em" gradientUnits="userSpaceOnUse" x1="40" y1="20" x2="270" y2="140"><stop offset="0" stop-color="#ffe3b8"/><stop offset=".5" stop-color="#f7b062"/><stop offset="1" stop-color="#ea7d2c"/></linearGradient>
</defs>'''

def svg(inner, d, vb="40 -12 222 168"):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}">{d}{inner}</svg>'

IV, INK, STR = "#f3ece0", "#141316", "#1a1109"
C = {}
C["1-ivory-dark"] = svg(t_shape(IV) + g_shapes(IV) + r_shape(IV, "url(#tl)", STR, STR), defs(IV, "#ef8a2b"))
C["1-ink-light"] = svg(t_shape(INK) + g_shapes(INK) + r_shape(INK, "url(#tl)", INK, INK), defs(INK, "#ef8a2b"))
C["2-ember-dark"] = svg(t_shape("url(#emt)") + g_shapes("url(#em)") + r_shape("url(#em)", "url(#em)", STR, STR), defs(IV, "#ef8a2b"))
C["3-mono-dark"] = svg(t_shape(IV) + g_shapes(IV) + r_shape(IV, IV, "#07060e", IV), defs(IV, IV))
C["3-mono-light"] = svg(t_shape(INK) + g_shapes(INK) + r_shape(INK, INK, "#f7f3ec", INK), defs(INK, INK))
for k, v in C.items():
    open(f"{out}/{k}.svg", "w").write(v)

big = "".join(f'<figure class="{"l" if "light" in k else "d"}"><img src="{k}.svg"><figcaption>{k}</figcaption></figure>' for k in C)
open(f"{out}/index.html", "w").write(f'''<!doctype html><meta charset="utf-8"><title>Tgr logo</title><style>
body{{margin:0;background:#222;font:13px system-ui;display:grid;grid-template-columns:1fr 1fr;gap:2px}}
figure{{margin:0;padding:48px 70px 14px;display:flex;flex-direction:column;align-items:center}}
.d{{background:#07060e;color:#a69fb4}}.l{{background:#f7f3ec;color:#666}}
img{{width:100%;max-width:460px}}figcaption{{margin-top:6px}}
.small{{grid-column:1/-1;background:#0e0a1c;display:flex;gap:40px;align-items:center;padding:24px 40px;color:#a69fb4}}
.small img{{width:auto}}</style>{big}
<div class="small"><img src="1-ivory-dark.svg" style="height:32px"><img src="1-ivory-dark.svg" style="height:20px"><img src="2-ember-dark.svg" style="height:32px"><span>작은 크기(헤더 32px · 20px)</span></div>''')
print("ok")
