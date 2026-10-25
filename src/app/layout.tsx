import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07060e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://willis-tgr.com"),
  title: "Tgr",
  description: "Tgr은 과정을 기록하는 SNS Willist와, 여럿이 함께 출연하는 라이브 방송 Ing를 만듭니다.",
  openGraph: {
    title: "Tgr",
    description: "결과보다 과정을 나누는 서비스를 만듭니다. Willist · Ing",
    url: "https://willis-tgr.com",
    siteName: "Tgr",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${geist.variable} ${cormorant.variable} ${pretendard.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
