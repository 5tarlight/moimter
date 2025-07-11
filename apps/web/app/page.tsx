"use client";

import { useState } from "react";
import HomeHeader from "../components/index/header";
import cn from "@yeahx4/cn";

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
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <HomeHeader theme={themes[activeTheme]} />
      <main className={cn("min-h-screen", themes[activeTheme].bg)}>
        <h1>Hello World</h1>
      </main>
    </>
  );
}
