import type { Metadata } from "next";
import "./globals.css";
import { fontVariable } from './fonts';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Script from "next/script";

export const metadata: Metadata = {
  title: "이하루, 첫 생일",
  description: "haru first birthday.",
  icons: {
    icon: "/images/favicon.png",
  },
};

declare global {
  interface Window {
    kakao: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={fontVariable}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
