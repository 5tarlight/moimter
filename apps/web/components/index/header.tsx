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
      <ContentWrapper className="flex items-center justify-between">
        <div>
          <HeaderLogo theme={theme} />
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
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

        <div>
          <div className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
            Login
          </div>
        </div>
      </ContentWrapper>
    </header>
  );
}
