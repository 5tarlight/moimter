import { ReactNode } from "react";

export default function FooterMenuContainer({
  children,
}: {
  children?: ReactNode;
}) {
  return <div className="flex flex-col gap-4 text-white w-64">{children}</div>;
}
