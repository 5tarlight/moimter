"use client";

import AuthContainer from "../../components/auth/auth-container";
import AuthSeparator from "../../components/auth/separator";
import AuthTitle from "../../components/auth/auth-title";
import AuthGoToHome from "../../components/auth/go-to-home";
import AuthDescription from "../../components/auth/auth-description";
import AuthForm from "../../components/auth/auth-form";
import OAuth from "../../components/auth/oauth";
import { useState } from "react";
import AuthFieldItem from "../../components/auth/auth-field-item";
import { CiAt, CiLock, CiMail, CiUser } from "react-icons/ci";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [identifierError, setIdentifierError] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const handleSignUp = () => {};

  return (
    <AuthContainer>
      <AuthGoToHome />

      <AuthForm onSubmit={handleSignUp}>
        <AuthTitle>회원가입</AuthTitle>
        <AuthDescription>Moimter 계정을 생성합니다.</AuthDescription>

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
          placeholder="8자 이상, 영문+숫자+특수문자 조합"
          name="password"
          value={password}
          icon={<CiLock />}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          isRequired
        />
        <AuthFieldItem
          label="비밀번호 확인"
          type="password"
          name="confirmPassword"
          placeholder="비밀번호를 다시 입력하세요"
          icon={<CiLock />}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={confirmPasswordError}
          isRequired
        />
        <AuthFieldItem
          label="아이디"
          type="text"
          name="identifier"
          icon={<CiAt />}
          placeholder="your_unique_id"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          description="다른 사용자들이 @your_id로 당신을 찾을 수 있어요"
          error={identifierError}
          isRequired
        />
        <AuthFieldItem
          label="닉네임"
          type="text"
          name="username"
          value={username}
          icon={<CiUser />}
          placeholder="다른 사용자에게 보여질 이름"
          onChange={(e) => setUsername(e.target.value)}
          error={usernameError}
          isRequired
        />
      </AuthForm>
    </AuthContainer>
  );
}
