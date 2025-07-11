import cn from "@yeahx4/cn";
import { HomeTheme } from "../../app/page";
import { Sparkles } from "lucide-react";

export default function HeaderLogo({ theme }: { theme: HomeTheme }) {
  return (
    <div className={cn("flex items-center gap-2")}>
      <div
        className={cn(
          "w-10 h-10 bg-gradient-to-r rounded-2xl",
          theme.accent,
          "flex items-center justify-center shadow-lg"
        )}
      >
        <Sparkles className="w-6 h-6 text-white" />
      </div>
      <div>
        <span
          className={cn(
            "text-2xl font-bold bg-gradient-to-r from-gray-800",
            "to-gray-600 bg-clip-text text-transparent"
          )}
        >
          Moimter
        </span>
        <p className="text-xs text-gray-500">나만의 모임 공간</p>
      </div>
    </div>
  );
}
