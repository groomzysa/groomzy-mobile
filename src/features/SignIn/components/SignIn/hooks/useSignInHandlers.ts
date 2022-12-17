import { DrawerNavigationProp } from "@react-navigation/drawer";
import { validate } from "isemail";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserRole } from "../../../../../api/graphql/api.schema";
import { useSignIn } from "../../../../../api/hooks/mutations";
import { TRootAppDrawerParamList } from "../../../../../components/GNavigation/components/AppNavigator/types";
import { setHideDrawerHeader } from "../../../../../store/slices/appSlice/appSlice";
import { useSignInEffects } from "./useSignInEffects";

export const useSignInHandlers = (
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
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isProvider, setIsProvider] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useDispatch();
  /**
   *
   * Custom hooks
   *
   */
  const { signInTrigger, token, signInLoading, signInHasError, signInError } =
    useSignIn();

  useSignInEffects({
    navigation,
    setEmail,
    setIsProvider,
    setPassword,
    token,
  });

  /**
   *
   * Handlers
   *
   */

  const forgotPasswordHandler = () => {
    dispatch(setHideDrawerHeader({ hideDrawerHeader: true }));
    navigation.navigate("Request password reset");
  };

  const signInHandler = () => {
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

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  return {
    forgotPasswordHandler,
    signInLoading,
    signInHasError,
    signInError,
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
    isProvider,
    setIsProvider,
    showPassword,
    signInHandler,
    showPasswordHandler,
  };
};
