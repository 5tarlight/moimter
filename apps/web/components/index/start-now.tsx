import cn from "@yeahx4/cn";
import { HomeTheme } from "../../app/page";
import { ArrowRight, Sparkles } from "lucide-react";

export default function StartNow({ theme }: { theme: HomeTheme }) {
  return (
    <section
      className={cn(
        "py-16 flex items-center flex-col gap-4 text-center",
        "bg-gradient-to-r",
        theme.accent,
        "relative overflow-hidden w-full mt-32 text-white"
      )}
    >
      <div className={cn("text-3xl sm:text-4xl font-bold")}>
        지금 바로 나만의 특별한 공간을 만들어보세요!
      </div>
      <div className="text-lg sm:text-xl text-white/90 max-w-2xl text-center">
        무료로 시작해서 원하는 만큼 꾸미고, 사람들과 소통하며 특별한 추억을
        만들어가세요.
      </div>
      <div className="flex mt-4 gap-8 justify-center">
        <button
          className={cn(
            "flex justify-center bg-white hover:bg-gray-100",
            "px-8 py-2 rounded-sm items-center gap-2 cursor-pointer",
            "text-lg text-gray-900 transition-all"
          )}
        >
          <Sparkles className="mr-2 w-5 h-5" />
          <span>무료로 시작하기</span>
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
        <button
          className={cn(
            "border-1 border-white rounded-sm px-8 py-2 text-lg",
            "hover:bg-white hover:text-gray-900 transition-all",
            "cursor-pointer"
          )}
        >
          더 많은 기능 보기
        </button>
      </div>
      <div className="text-sm text-white/80 mt-2">
        회원가입 무료 • 기본 꾸미기 무료 • 언제든 업그레이드 가능
      </div>
    </section>
  );
}
