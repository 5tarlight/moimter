import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AuthGoToHome() {
  return (
    <Link href="/" className="flex gap-2 mt-4 py-4 px-8 items-center">
      <ArrowLeft className="w-5 h-5 text-gray-600" />
      <span>홈으로 돌아가기</span>
    </Link>
  );
}
