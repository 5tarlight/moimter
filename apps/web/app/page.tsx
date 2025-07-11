"use client";

import { useState } from "react";
import HomeHeader from "../components/index/header";
import cn from "@yeahx4/cn";
import ContentWrapper from "../components/common/content-wrapper";
import { ArrowRight, Palette, Play } from "lucide-react";

const themes = {
  cute: {
    bg: "bg-gradient-to-br from-pink-50 to-purple-50",
    accent: "from-pink-400 to-purple-500",
    card: "border-pink-200 bg-white/80",
  },
  modern: {
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
    accent: "from-blue-500 to-indigo-600",
    card: "border-blue-200 bg-white/80",
  },
  nature: {
    bg: "bg-gradient-to-br from-green-50 to-emerald-50",
    accent: "from-green-500 to-emerald-600",
    card: "border-green-200 bg-white/80",
  },
} as const;

export type HomeThemeType = keyof typeof themes;
export type HomeTheme = (typeof themes)[HomeThemeType];

export default function Home() {
  const [activeTheme, setActiveTheme] = useState<HomeThemeType>("cute");

  return (
    <>
      <HomeHeader theme={themes[activeTheme]} />
      <main
        className={cn(
          "min-h-screen flex flex-col items-center",
          themes[activeTheme].bg
        )}
      >
        <ContentWrapper className="pt-32">
          <section className="flex flex-col items-center gap-4 text-center">
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
                  themes[activeTheme].accent
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
              className={cn(
                "flex flex-col sm:flex-row gap-4 justify-center mb-12"
              )}
            >
              <button
                className={cn(
                  `text-lg px-8 py-2 bg-gradient-to-r`,
                  themes[activeTheme].accent,
                  `text-white shadow-lg hover:shadow-xl transition-all`,
                  "flex items-center justify-center gap-2 rounded-md",
                  "cursor-pointer"
                )}
              >
                <Palette className="mr-2 w-5 h-5" />
                무료로 꾸미기 시작
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                className={cn(
                  "text-lg px-8 py-2 bg-white/50 backdrop-blur-sm",
                  "flex items-center justify-center gap-2 rounded-md",
                  "cursor-pointer hover:bg-white/70 transition-all",
                  "border border-gray-200 shadow-sm hover:shadow-xl"
                )}
              >
                <Play className="mr-2 w-4 h-4" />
                모임 찾아보기
              </button>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 mr-4 self-center">
                테마 미리보기:
              </p>
              {Object.entries(themes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => setActiveTheme(key as HomeThemeType)}
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
          </section>
        </ContentWrapper>
      </main>
    </>
  );
}
