import cn from "@yeahx4/cn";
import { HomeTheme, HomeThemes, HomeThemeType } from "../../app/page";

export default function LandingThemeSwitcher({
  themes,
  theme: activeTheme,
  setTheme,
}: {
  themes: HomeThemes;
  theme: HomeThemeType;
  setTheme: (theme: HomeThemeType) => void;
}) {
  return (
    <>
      <div className="flex justify-center gap-4 mb-8">
        <p className="text-sm text-gray-500 mr-4 self-center">테마 미리보기:</p>
        {Object.entries(themes).map(([key, theme]) => (
          <button
            key={key}
            onClick={() => setTheme(key as HomeThemeType)}
            className={cn(
              `w-8 h-8 rounded-full bg-gradient-to-r ${theme.accent} shadow-md`,
              `hover:shadow-lg transition-all`,
              activeTheme === key
                ? "ring-4 ring-white ring-opacity-60 scale-110"
                : "",
              "cursor-pointer"
            )}
          />
        ))}
      </div>
    </>
  );
}
