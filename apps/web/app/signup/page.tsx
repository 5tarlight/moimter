"use client";

import AuthContainer from "../../components/auth/auth-container";
import AuthSeparator from "../../components/auth/separator";
import AuthTitle from "../../components/auth/auth-title";
import AuthGoToHome from "../../components/auth/go-to-home";
import AuthDescription from "../../components/auth/auth-description";
import AuthForm from "../../components/auth/auth-form";
import OAuth from "../../components/auth/oauth";
import { FormEvent, useState } from "react";
import AuthFieldItem from "../../components/auth/auth-field-item";
import { CiAt, CiLock, CiMail, CiUser } from "react-icons/ci";
import AgreementItem from "../../components/auth/agree-field";
import Link from "next/link";
import AuthSubmit from "../../components/auth/submit-btn";
import {
  validateEmail,
  validateIdentifier,
  validatePassword,
  validateUsername,
} from "@repo/dto/validator";

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
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeTermsError, setAgreeTermsError] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreePrivacyError, setAgreePrivacyError] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [agreeMarketingError, setAgreeMarketingError] = useState(false);

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setIdentifierError("");
    setUsernameError("");
    setAgreeTermsError(false);
    setAgreePrivacyError(false);
    setAgreeMarketingError(false);
  };

  const validateForm = (): boolean => {
    let ok = true;

    if (!email) {
      setEmailError("이메일을 입력해주세요.");
      ok = false;
    } else {
      const emailValid = validateEmail(email);

      if (!emailValid.valid) {
        if (emailValid.error == "wrong-format") {
          setEmailError("이메일 형식이 올바르지 않습니다.");
        } else if (emailValid.error == "too short") {
          setEmailError("이메일이 너무 짧습니다.");
        } else if (emailValid.error == "too long") {
          setEmailError("이메일이 너무 깁니다.");
        }

        ok = false;
      }
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      ok = false;
    } else {
      const passwordValid = validatePassword(password);

      if (!passwordValid.valid) {
        if (passwordValid.error == "too short") {
          setPasswordError("비밀번호는 8자 이상이어야 합니다.");
        } else if (passwordValid.error == "weak") {
          setPasswordError("대소문자, 숫자, 특수문자를 포함해야 합니다.");
        } else if (passwordValid.error == "too long") {
          setPasswordError("비밀번호가 너무 깁니다.");
        }

        ok = false;
      }
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
      ok = false;
    }

    if (!identifier) {
      setIdentifierError("아이디를 입력해주세요.");
      ok = false;
    } else {
      const identifierValid = validateIdentifier(identifier);
      if (!identifierValid.valid) {
        if (identifierValid.error == "wrong-format") {
          setIdentifierError("소문자, 숫자, 밑줄만 사용할 수 있습니다.");
        } else if (identifierValid.error == "too short") {
          setIdentifierError("아이디는 3자 이상이어야 합니다.");
        } else if (identifierValid.error == "too long") {
          setIdentifierError("아이디는 20자 이하이어야 합니다.");
        }

        ok = false;
      }
    }

    if (!username) {
      setUsernameError("닉네임을 입력해주세요.");
      ok = false;
    } else {
      const usernameValid = validateUsername(username);

      if (!usernameValid.valid) {
        if (usernameValid.error == "too short") {
          setUsernameError("닉네임은 2자 이상이어야 합니다.");
        } else if (usernameValid.error == "too long") {
          setUsernameError("닉네임은 20자 이하이어야 합니다.");
        }

        ok = false;
      }
    }

    if (!agreeTerms) {
      setAgreeTermsError(true);
      ok = false;
    }

    if (!agreePrivacy) {
      setAgreePrivacyError(true);
      ok = false;
    }

    return ok;
  };

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    clearErrors();
    const ok = validateForm();

    if (!ok) return;

    fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
        identifier,
        username,
      }),
    });
  };

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
          onChange={(e) => {
            setEmailError("");
            setEmail(e.target.value);
          }}
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
          onChange={(e) => {
            setPasswordError("");
            setPassword(e.target.value);
          }}
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
          onChange={(e) => {
            setConfirmPasswordError("");
            setConfirmPassword(e.target.value);
          }}
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
          onChange={(e) => {
            setIdentifierError("");
            setIdentifier(e.target.value);
          }}
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
          onChange={(e) => {
            setUsernameError("");
            setUsername(e.target.value);
          }}
          error={usernameError}
          isRequired
        />

        <div className="flex flex-col gap-2 w-full">
          <AgreementItem
            label={
              <span>
                <Link
                  href="/terms"
                  className="text-purple-600 hover:underline"
                  target="_blank"
                >
                  이용약관
                </Link>
                에 동의합니다.
              </span>
            }
            required
            checked={agreeTerms}
            onChange={() => {
              setAgreeTermsError(false);
              setAgreeTerms(!agreeTerms);
            }}
            error={agreeTermsError}
          />
          <AgreementItem
            label={
              <span>
                <Link
                  href="/privacy"
                  target="_blank"
                  className="text-purple-600 hover:underline"
                >
                  개인정보 처리방침
                </Link>
                에 동의합니다.
              </span>
            }
            required
            checked={agreePrivacy}
            onChange={() => {
              setAgreePrivacyError(false);
              setAgreePrivacy(!agreePrivacy);
            }}
            error={agreePrivacyError}
          />
          <AgreementItem
            label={<span>마케팅 정보 수신에 동의합니다. (선택)</span>}
            checked={agreeMarketing}
            onChange={() => setAgreeMarketing(!agreeMarketing)}
            error={agreeMarketingError}
          />
        </div>

        <AuthSubmit>계정 만들기</AuthSubmit>

        <p className="text-sm text-gray-500 mt-4">
          이미 계정이 있으신가요?{" "}
          <Link href="/login" className="text-purple-600 hover:underline">
            로그인하기
          </Link>
        </p>
      </AuthForm>
    </AuthContainer>
  );
}
