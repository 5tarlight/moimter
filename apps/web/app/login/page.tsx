"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import AuthContainer from "../../components/auth/auth-container";
import AuthGoToHome from "../../components/auth/go-to-home";
import AuthForm from "../../components/auth/auth-form";
import AuthTitle from "../../components/auth/auth-title";
import AuthDescription from "../../components/auth/auth-description";
import AuthSeparator from "../../components/auth/separator";
import OAuth from "../../components/auth/oauth";
import AuthFieldItem from "../../components/auth/auth-field-item";
import AuthSubmit from "../../components/auth/submit-btn";
import { CiMail, CiLock } from "react-icons/ci";

export default function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const validateForm = (): boolean => {
    let ok = true;

    if (!email) {
      setEmailError("이메일을 입력해주세요.");
      ok = false;
    } else {
      if (email.length > 254) {
        setEmailError("이메일이 너무 깁니다.");
        ok = false;
      }
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      ok = false;
    } else {
      if (password.length > 72) {
        setPasswordError("비밀번호가 너무 깁니다.");
        ok = false;
      }
    }

    return ok;
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    clearErrors();
    const ok = validateForm();

    if (!ok) return;
  };

  return (
    <AuthContainer>
      <AuthGoToHome />

      <AuthForm onSubmit={handleLogin}>
        <AuthTitle>로그인</AuthTitle>
        <AuthDescription>Moimter 계정에 로그인합니다.</AuthDescription>

        <OAuth types={["google", "naver", "github"]} />

        <AuthSeparator />

        <AuthFieldItem
          label="이메일"
          type="email"
          placeholder="your@email.com"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          icon={<CiMail />}
          isRequired
        />
        <AuthFieldItem
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          icon={<CiLock />}
          isRequired
        />

        <div className="w-full text-right mt-2">
          <Link
            href="/forgot-password"
            className="text-sm text-purple-600 hover:underline"
          >
            비밀번호를 잊으셨나요?
          </Link>
        </div>

        <AuthSubmit>로그인</AuthSubmit>

        <p className="text-sm text-gray-500 mt-4">
          아직 계정이 없으신가요?{" "}
          <Link href="/signup" className="text-purple-600 hover:underline">
            회원가입하기
          </Link>
        </p>
      </AuthForm>
    </AuthContainer>
  );
}
