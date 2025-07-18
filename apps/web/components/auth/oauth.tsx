import { OAuthType } from "@repo/dto/auth";
import cn from "@yeahx4/cn";
import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";

export default function OAuth({ types }: { types: OAuthType[] }) {
  const SNSIcon: Record<OAuthType, ReactNode> = {
    google: (
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full bg-white",
          "shadow-md border border-gray-200 hover:shadow-lg transition-shadow",
          "text-2xl"
        )}
      >
        <FcGoogle />
      </div>
    ),
    naver: (
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full bg-green-500",
          "shadow-md border border-gray-200 hover:shadow-lg transition-shadow",
          "text-white text-sm"
        )}
      >
        <SiNaver />
      </div>
    ),
    github: (
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full bg-gray-800",
          "shadow-md border border-gray-200 hover:shadow-lg transition-shadow",
          "text-white text-lg"
        )}
      >
        <FaGithub />
      </div>
    ),
  };

  // OAuth must be unique. Check it and throw if not.
  const uniqueTypes = Array.from(new Set(types));
  if (uniqueTypes.length !== types.length) {
    throw new Error("OAuth types must be unique");
  }

  return (
    <div className="flex gap-4 my-4">
      {types.map((type, i) => {
        return (
          <button
            key={i}
            className={cn(
              "cursor-pointer hover:scale-110 transition-transform"
            )}
          >
            {SNSIcon[type]}
          </button>
        );
      })}
    </div>
  );
}
