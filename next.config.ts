import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 서버 없이 out/ 폴더의 정적 파일로 내보내 Cloudflare Pages에 올린다
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
