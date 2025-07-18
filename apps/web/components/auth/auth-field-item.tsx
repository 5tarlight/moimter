"use client";

import cn from "@yeahx4/cn";
import { Eye, EyeOff } from "lucide-react";
import { ChangeEvent, useState } from "react";

export default function AuthFieldItem({
  label,
  type,
  value,
  onChange,
  error,
  placeholder = "",
  description,
  name,
  isRequired = false,
  icon,
}: {
  label: string;
  type: "text" | "email" | "password";
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  name: string;
  placeholder?: string;
  description?: string;
  isRequired?: boolean;
  icon?: React.ReactNode;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="mb-4 w-full">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </label>
        {error ? (
          <p className="text-red-500 text-sm mt-1 italic">{error}</p>
        ) : (
          <div />
        )}
      </div>
      <div
        className={cn(
          "flex items-center border rounded-md px-3 py-2 focus-within:ring-2",
          error ? "border-red-500" : "border-gray-300"
        )}
      >
        {icon && <div className="mr-2 text-gray-500">{icon}</div>}
        <input
          type={inputType}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 outline-none bg-transparent"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-sm text-gray-500 hover:text-gray-700"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
      <div className="text-sm mt-1 text-gray-500">{description}</div>
    </div>
  );
}
