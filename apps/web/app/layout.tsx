import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/common/footer";

export const metadata: Metadata = {
  title: "모임터",
  description: "완전히 커스터마이즈 가능한 우리들의 모임 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
