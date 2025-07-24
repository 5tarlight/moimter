export type OAuthType = "google" | "naver" | "github";

export interface SignUpDto {
  email: string;
  password: string;
  username: string;
  identifier: string;
  oauthType?: OAuthType;
}
