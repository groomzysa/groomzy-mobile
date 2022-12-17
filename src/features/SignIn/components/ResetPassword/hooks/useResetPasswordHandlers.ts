import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useState } from "react";
import { useResetPassword } from "../../../../../api/hooks/mutations";
import { TRootAppDrawerParamList } from "../../../../../components/GNavigation/components/AppNavigator/types";
import { useResetPasswordEffects } from "./useResetPasswordEffects";

export const useResetPasswordHandlers = (
  navigation: DrawerNavigationProp<
    TRootAppDrawerParamList,
    "Sign in",
    undefined
  >
) => {
  /**
   *
   * State
   *
   */
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [passwordResetOTP, setPasswordResetOTP] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  /**
   *
   * Custom hooks
   *
   */
  const {
    resetPasswordTrigger,
    resetPassword,
    resetPasswordLoading,
    resetPasswordHasError,
    resetPasswordError,
  } = useResetPassword();

  const { successMessage } = useResetPasswordEffects({
    navigation,
    setPassword,
    setPasswordResetOTP,
    message: resetPassword?.message,
  });

  /**
   *
   * Handlers
   *
   */
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const resetPasswordHandler = () => {
    const abortResetPassword = !password || !passwordResetOTP;

    if (password.length < 5) {
      setPasswordError("Password is too short!");
    } else if (passwordError) {
      setPasswordError("");
    }

    if (abortResetPassword) return;

    resetPasswordTrigger({
      password,
      passwordResetOTP,
    });
  };

  return {
    password,
    setPassword,
    passwordError,
    passwordResetOTP,
    setPasswordResetOTP,
    successMessage,
    resetPasswordLoading,
    resetPasswordHasError,
    resetPasswordError,
    resetPasswordHandler,
    showPasswordHandler,
    showPassword,
  };
};
