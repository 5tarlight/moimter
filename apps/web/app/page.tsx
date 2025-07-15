"use client";

import { useState } from "react";
import HomeHeader from "../components/index/header";
import cn from "@yeahx4/cn";
import ContentWrapper from "../components/common/content-wrapper";
import MainTitle from "../components/index/main-title";
import LandingThemeSwitcher from "../components/index/landing-theme-switcher";
import LayoutPreview from "../components/index/layout-preview";
import InfiniteCustom from "../components/index/infinite-custom";

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
export type HomeThemes = typeof themes;

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
            <MainTitle theme={themes[activeTheme]} />
            <LandingThemeSwitcher
              setTheme={setActiveTheme}
              themes={themes}
              theme={activeTheme}
            />
            <LayoutPreview theme={themes[activeTheme]} />
          </section>

          <section>
            <InfiniteCustom />
          </section>

          <div className="h-64"></div>
        </ContentWrapper>
      </main>
    </>
  );
}
