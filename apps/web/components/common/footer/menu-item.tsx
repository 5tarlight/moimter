import Link from "next/link";

export default function FooterMenuItem({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <Link
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}
