import cn from "@yeahx4/cn";
import { ReactNode } from "react";

export default function AuthContainer({ children }: { children: ReactNode }) {
  return (
    <main
      className={cn(
        "min-h-screen bg-gradient-to-br from-pink-50 to-purple-50",
        "flex flex-col items-center"
      )}
    >
      {children}
    </main>
  );
}
