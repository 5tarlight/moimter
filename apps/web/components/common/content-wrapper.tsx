import cn from "@yeahx4/cn";

export default function ContentWrapper({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <div className={cn("max-w-5xl w-full", className)}>{children}</div>;
}
