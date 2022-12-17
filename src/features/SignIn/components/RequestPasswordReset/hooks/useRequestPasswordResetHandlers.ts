import { DrawerNavigationProp } from "@react-navigation/drawer";
import { validate } from "isemail";
import { useState } from "react";
import { UserRole } from "../../../../../api/graphql/api.schema";
import { useRequestPasswordReset } from "../../../../../api/hooks/mutations";
import { TRootAppDrawerParamList } from "../../../../../components/GNavigation/components/AppNavigator/types";
import { useRequestPasswordResetEffects } from "./useRequestPasswordResetEffects";

export const useRequestPasswordResetHandlers = (
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
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [isProvider, setIsProvider] = useState<boolean>(false);

  /**
   *
   * Custom hooks
   *
   */
  const {
    requestPasswordResetTrigger,
    requestPasswordReset,
    requestPasswordResetLoading,
    requestPasswordResetHasError,
    requestPasswordResetError,
  } = useRequestPasswordReset();

  const { successMessage } = useRequestPasswordResetEffects({
    navigation,
    setEmail,
    setIsProvider,
    message: requestPasswordReset?.message,
  });

  /**
   *
   * Handlers
   *
   */

  const requestPasswordResetHandler = () => {
    const abortRequestPasswordReset = !email || !validate(email);

    if (!validate(email)) {
      setEmailError("Email is invalid.");
    } else if (emailError) {
      setEmailError("");
    }

    if (abortRequestPasswordReset) return;

    requestPasswordResetTrigger({
      email,
      role: isProvider ? UserRole.Provider : UserRole.Client,
    });
  };

  return {
    email,
    setEmail,
    emailError,
    isProvider,
    setIsProvider,
    successMessage,
    requestPasswordResetLoading,
    requestPasswordResetHasError,
    requestPasswordResetError,
    requestPasswordResetHandler,
  };
};
