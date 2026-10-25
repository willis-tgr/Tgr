import { WORDMARK_GLYPHS, WORDMARK_VIEWBOX } from "./willistWordmarkPaths";

/**
 * Willist 워드마크 — 'Willist.'가 사이의 'illis'를 접어 'Wt.'가 됐다가 다시 펼쳐지기를 반복한다.
 * 글자 도형은 new_willist 웹의 워드마크와 같다. 색은 Willist primary.
 */
export default function WillistWordmark({ className = "" }: { className?: string }) {
  let mid = 0;
  return (
    <svg viewBox={WORDMARK_VIEWBOX} role="img" aria-label="Willist" className={`willist-wordmark overflow-visible ${className}`}>
      {WORDMARK_GLYPHS.map((g, i) => {
        // W는 제자리, illis는 접혔다 펼쳐지고, t와 마침표는 W 옆으로 당겨졌다 돌아간다
        const role = g.id === "W" ? "head" : g.id === "t" || g.id === "dot" ? "tail" : "mid";
        const k = role === "mid" ? mid++ : 0;
        return (
          <g key={g.id + i} className={`wm-${role}`} style={{ ["--k" as string]: k }}>
            <path d={g.d} transform={g.transform} />
          </g>
        );
      })}
    </svg>
  );
}
