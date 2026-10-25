# Tgr 회사 홈페이지 (willis-tgr.com)

Tgr과 상품(Willist, Ing)을 소개하는 한 페이지 사이트. Next.js 정적 내보내기(`output: "export"`) → `out/` 폴더를 Cloudflare Pages에 올린다.

```bash
nvm use 24
pnpm install
pnpm dev     # http://localhost:3000
pnpm build   # out/ 생성
```

- 내용: `src/app/page.tsx` (회사 소개 · 상품 · 연락처), 색·폰트: `src/app/globals.css`, 메타데이터: `src/app/layout.tsx`
- 회사 로고·마스코트: `public/brand/tgr-wordmark.webp`, `tgr-tiger.webp` (원본 PNG에서 흰 배경을 지우고, 어두운 배경용으로 로고의 검은 글자를 아이보리로 바꾼 것)
- 상품 로고: `public/brand/` (Willist: new_willist `apps/web/public/wtLogo.svg`, Ing: Ing `apps/web/public/brand/ing-logo-dark-animated.svg`)

## 배포 (Cloudflare Pages)

1. `npx wrangler login` (브라우저에서 Cloudflare 로그인)
2. `pnpm build && npx wrangler pages deploy out --project-name tgr`
3. Cloudflare 대시보드 → Workers & Pages → tgr → 사용자 지정 도메인 → `willis-tgr.com`, `www.willis-tgr.com` 추가

## 연락 메일 (contact@willis-tgr.com)

Cloudflare 대시보드 → willis-tgr.com → 이메일 → 이메일 라우팅 → `contact` 주소를 받을 메일함(예: Gmail)으로 전달.
