"use client";

import AuthContainer from "../../components/auth/auth-container";
import AuthTitle from "../../components/auth/auth-title";
import AuthGoToHome from "../../components/auth/go-to-home";
import AuthDescription from "../../components/auth/auth-description";
import AuthForm from "../../components/auth/auth-form";

export default function SignUp() {
  const handleSignUp = () => {};

  return (
    <AuthContainer>
      <AuthGoToHome />

      <AuthTitle>환영합니다!</AuthTitle>
      <AuthDescription>나만의 특별한 공간을 만들어보세요</AuthDescription>

      <AuthForm onSubmit={handleSignUp}></AuthForm>
    </AuthContainer>
  );
}
