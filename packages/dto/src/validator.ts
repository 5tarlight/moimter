export const emailRegex =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/i;
export type EmailError =
  | "wrong-format"
  | "too short"
  | "too long"
  | "already exists";

export const validateEmail = (
  email: string
): {
  valid: boolean;
  error?: EmailError;
} => {
  const valid = emailRegex.test(email);
  let error: EmailError | undefined;

  if (email.length < 5) error = "too short";
  else if (email.length > 254) error = "too long";
  else if (!valid) error = "wrong-format";

  return {
    valid: valid && !error,
    error,
  };
};

export const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/;
export type PasswordError = "too short" | "weak" | "too long";

export const validatePassword = (
  password: string
): {
  valid: boolean;
  error?: PasswordError;
} => {
  const valid = password.length >= 8 && password.length <= 72;
  let error: PasswordError | undefined;

  if (password.length < 8) error = "too short";
  else if (password.length > 72) error = "too long";
  else if (!passwordRegex.test(password)) error = "weak";

  return {
    valid: valid && !error,
    error,
  };
};

export const identifierRegex = /^[a-z0-9_]{3,20}$/;
export type IdentifierError =
  | "wrong-format"
  | "too short"
  | "too long"
  | "already exists";

export const validateIdentifier = (
  identifier: string
): {
  valid: boolean;
  error?: IdentifierError;
} => {
  const valid = identifierRegex.test(identifier);
  let error: IdentifierError | undefined;

  if (identifier.length < 3) error = "too short";
  else if (identifier.length > 20) error = "too long";
  else if (!valid) error = "wrong-format";

  return {
    valid: valid && !error,
    error,
  };
};

export type UsernameError = "too short" | "too long" | "already exists";

export const validateUsername = (
  username: string
): {
  valid: boolean;
  error?: UsernameError;
} => {
  const valid = username.length >= 2 && username.length <= 20;
  let error: UsernameError | undefined;

  if (username.length < 2) error = "too short";
  else if (username.length > 20) error = "too long";

  return {
    valid: valid && !error,
    error,
  };
};
