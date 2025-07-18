import { ArrowRight, Palette, Play } from "lucide-react";
import { HomeTheme } from "../../app/page";
import cn from "@yeahx4/cn";
import Link from "next/link";

export default function MainTitle({ theme }: { theme: HomeTheme }) {
  return (
    <>
      <span className="bg-gray-200/40 px-4 py-2 rounded-full">
        ✨ 완전히 새로운 커뮤니티 경험
      </span>
      <h1
        className={cn(
          "text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
        )}
      >
        <span
          className={cn(
            `text-transparent bg-clip-text bg-gradient-to-r`,
            theme.accent
          )}
        >
          나만의 스타일로
        </span>
        <br />
        모임을 만들어보세요
      </h1>

      <p
        className={cn(
          "text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
        )}
      >
        테마부터 레이아웃까지, 모든 것을 내 취향대로!
        <br />
        세상에 하나뿐인 나만의 커뮤니티 공간을 만들어보세요.
      </p>

      <div
        className={cn("flex flex-col sm:flex-row gap-4 justify-center mb-12")}
      >
        <Link
          href="/signup"
          className={cn(
            `text-lg px-8 py-2 bg-gradient-to-r`,
            theme.accent,
            `text-white shadow-lg hover:shadow-xl transition-all`,
            "flex items-center justify-center gap-2 rounded-md",
            "cursor-pointer"
          )}
        >
          <Palette className="mr-2 w-5 h-5" />
          무료로 꾸미기 시작
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
        <Link
          href="/explore"
          className={cn(
            "text-lg px-8 py-2 bg-white/50 backdrop-blur-sm",
            "flex items-center justify-center gap-2 rounded-md",
            "cursor-pointer hover:bg-white/70 transition-all",
            "border border-gray-200 shadow-sm hover:shadow-xl"
          )}
        >
          <Play className="mr-2 w-4 h-4" />
          모임 찾아보기
        </Link>
      </div>
    </>
  );
}
