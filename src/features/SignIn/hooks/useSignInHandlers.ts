import { validate } from "isemail";
import { UserRole } from "../../../api/graphql/api.schema";
import { useSignIn } from "../../../api/hooks/mutations";
import { IshowPasswordHandlerParams, IsignInHandlerParams } from "./types";

export const useSignInHandlers = () => {
  const { signInTrigger, token, signInLoading, signInHasError, signInError } =
    useSignIn();

  const signInHandler = ({
    email,
    emailError,
    isProvider,
    password,
    passwordError,
    setEmailError,
    setPasswordError,
  }: IsignInHandlerParams) => {
    const emailAbort = !email || !validate(email);
    const passwordAbort = !password || password.length < 5;
    const abortSignIn = emailAbort || passwordAbort;

    if (!validate(email)) {
      setEmailError("Email is invalid.");
    } else if (emailError) {
      setEmailError("");
    }
    if (password.length < 5) {
      setPasswordError("Password is too short!");
    } else if (passwordError) {
      setPasswordError("");
    }

    if (abortSignIn) return;

    signInTrigger({
      email,
      password,
      role: isProvider ? UserRole.Provider : UserRole.Client,
    });
  };

  const showPasswordHandler = ({
    setShowPassword,
    showPassword,
  }: IshowPasswordHandlerParams) => {
    setShowPassword(!showPassword);
  };

  return {
    token,
    signInLoading,
    signInHasError,
    signInError,
    signInHandler,
    showPasswordHandler,
  };
};
