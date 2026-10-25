import { WORDMARK_GLYPHS, WORDMARK_VIEWBOX } from "./willistWordmarkPaths";

/**
 * Willist 워드마크 — 'Willist.'가 'Wt.'로 접혔다가 다시 펼쳐지기를 반복한다.
 * 'illis'는 W 뒤에서부터 보이는 영역이 넓어졌다 좁아지며 드러나고, 't.'는 그 경계 바로 오른쪽에 붙어 함께 움직인다.
 * 글자 도형은 new_willist 웹의 워드마크와 같다. 색은 Willist primary.
 */
export default function WillistWordmark({ className = "" }: { className?: string }) {
  const glyph = (g: (typeof WORDMARK_GLYPHS)[number], i: number) => (
    <path key={g.id + i} d={g.d} transform={g.transform} />
  );
  return (
    <svg viewBox={WORDMARK_VIEWBOX} role="img" aria-label="Willist" className={`willist-wordmark overflow-visible ${className}`}>
      <defs>
        {/* 오른쪽 끝(x=260)이 's' 끝까지 닿아 있다가, 접히면 W 안쪽(x=124)까지 물러난다 */}
        <mask id="willist-wordmark-reveal" maskUnits="userSpaceOnUse" x="-300" y="-50" width="700" height="220">
          <rect className="wm-reveal" x="-300" y="-50" width="560" height="220" fill="#fff" />
        </mask>
      </defs>
      <g>{WORDMARK_GLYPHS.filter((g) => g.id === "W").map(glyph)}</g>
      <g mask="url(#willist-wordmark-reveal)">
        {WORDMARK_GLYPHS.filter((g) => !["W", "t", "dot"].includes(g.id)).map(glyph)}
      </g>
      <g className="wm-tail">{WORDMARK_GLYPHS.filter((g) => g.id === "t" || g.id === "dot").map(glyph)}</g>
    </svg>
  );
}
