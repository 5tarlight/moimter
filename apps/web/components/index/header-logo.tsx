import cn from "@yeahx4/cn";
import { HomeTheme } from "../../app/page";
import { Sparkles } from "lucide-react";

export default function HeaderLogo({
  theme,
  footer,
}: {
  theme: HomeTheme;
  footer?: boolean;
}) {
  return (
    <div className={cn("ml-4 flex items-center gap-2")}>
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
            "to-gray-600 bg-clip-text text-transparent",
            footer ? "text-white/80" : ""
          )}
        >
          Moimter
        </span>
        <p
          className={cn("text-xs", footer ? "text-white/60" : "text-gray-500")}
        >
          나만의 모임 공간
        </p>
      </div>
    </div>
  );
}
