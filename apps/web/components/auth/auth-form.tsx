import cn from "@yeahx4/cn";
import { FormEvent, ReactNode } from "react";

export default function AuthForm({
  onSubmit,
  children,
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => any;
  children?: ReactNode;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "bg-white p-6 rounded-md shadow-lg mt-8 flex flex-col",
        "items-center max-w-96 w-full mb-32"
      )}
    >
      {children}
    </form>
  );
}
