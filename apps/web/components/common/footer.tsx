import Link from "next/link";
import HeaderLogo from "../index/header-logo";
import ContentWrapper from "./content-wrapper";
import FooterMenuContainer from "./footer/menu-container";
import { Instagram, Twitter, Youtube } from "lucide-react";
import FooterMenuTitle from "./footer/menu-title";
import FooterMenuItem from "./footer/menu-item";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 flex justify-center">
      <ContentWrapper className="max-w-7xl h-full flex flex-col justify-between">
        <div className="flex justify-between px-4">
          <FooterMenuContainer>
            <HeaderLogo
              theme={{
                bg: "bg-gradient-to-br from-pink-50 to-purple-50",
                accent: "from-pink-400 to-purple-500",
                card: "border-pink-200 bg-white/80",
              }}
              footer
            />
            <span className="ml-4 text-white/80">당신만을 위한 플랫폼</span>
            <div className="flex gap-2 ml-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </FooterMenuContainer>

          <FooterMenuContainer>
            <FooterMenuTitle>기능</FooterMenuTitle>
            <FooterMenuItem href="/">테마 꾸미기</FooterMenuItem>
            <FooterMenuItem href="/">레이아웃 편집</FooterMenuItem>
            <FooterMenuItem href="/">위젯 추가</FooterMenuItem>
            <FooterMenuItem href="/">프리미엄 기능</FooterMenuItem>
          </FooterMenuContainer>

          <FooterMenuContainer>
            <FooterMenuTitle>커뮤니티</FooterMenuTitle>
            <FooterMenuItem href="/">인기 모임</FooterMenuItem>
            <FooterMenuItem href="/">새로운 모임</FooterMenuItem>
            <FooterMenuItem href="/">카테고리</FooterMenuItem>
            <FooterMenuItem href="/">이벤트</FooterMenuItem>
          </FooterMenuContainer>

          <FooterMenuContainer>
            <FooterMenuTitle>지원</FooterMenuTitle>
            <FooterMenuItem href="/">도움말</FooterMenuItem>
            <FooterMenuItem href="/">문의하기</FooterMenuItem>
            <FooterMenuItem href="/">공지사항</FooterMenuItem>
            <FooterMenuItem href="/">개발자 API</FooterMenuItem>
          </FooterMenuContainer>
        </div>
        <hr className="my-8 text-white/20" />
        <p className="text-center text-white/60">
          &copy; {new Date().getFullYear()} Moimter. All rights reserved.
        </p>
      </ContentWrapper>
    </footer>
  );
}
