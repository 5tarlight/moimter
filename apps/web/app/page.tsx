"use client";

import { useState } from "react";

export default function Home() {
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
  type ThemeTypes = keyof typeof themes;

  const [activeTheme, setActiveTheme] = useState<ThemeTypes>("cute");
  const [isDark, setIsDark] = useState(false);

  return <div className="text-blue-500">Hello</div>;
}
