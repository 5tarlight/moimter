import cn from "@yeahx4/cn";
import { ReactNode } from "react";

export default function MainCard({
  children,
}: {
  children: [ReactNode, string, string];
}) {
  const [icon, title, desc] = children;

  return (
    <div
      className={cn(
        "flex flex-col items-center px-8 py-8 bg-white/80",
        "w-72 rounded-lg shadow-lg gap-2"
      )}
    >
      {icon}
      <span className="ml-2 font-bold text-2xl">{title}</span>
      <p className="text-gray-600 text-sm ml-2 text-center">{desc}</p>
    </div>
  );
}
