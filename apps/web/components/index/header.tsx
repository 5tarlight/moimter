import { HomeTheme } from "../../app/page";
import cn from "@yeahx4/cn";
import HeaderLogo from "./header-logo";
import ContentWrapper from "../common/content-wrapper";
import Link from "next/link";

export default function HomeHeader({ theme }: { theme: HomeTheme }) {
  return (
    <header
      className={cn(
        "backdrop-blur-md bg-white/70",
        "border-b border-white/20 top-0 sticky z-50",
        "flex items-center justify-center h-18"
      )}
    >
      <ContentWrapper
        className={cn(
          "grid grid-cols-2 md:grid-cols-3 items-center px-4 sm:px-6",
          "lg:px-8 w-full"
        )}
      >
        <div className="justify-self-start">
          <HeaderLogo theme={theme} />
        </div>

        <div className="justify-self-center hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            기능
          </Link>
          <Link
            href="#customize"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            커스터마이징
          </Link>
          <Link
            href="#community"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            커뮤니티
          </Link>
        </div>

        <div className="justify-self-end flex gap-4">
          <Link
            href="/login"
            className={cn(
              "text-sm cursor-pointer",
              "px-4 py-2 rounded-md transition-colors",
              theme.accent,
              "bg-gradient-to-r text-white"
            )}
          >
            시작하기
          </Link>
        </div>
      </ContentWrapper>
    </header>
  );
}
