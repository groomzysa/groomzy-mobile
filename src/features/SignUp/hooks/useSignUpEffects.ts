import { useEffect } from "react";
import { IuseSignUpEffects } from "./types";

export const useSignUpEffects = ({
  addUser,
  navigation,
  setEmail,
  setFirstName,
  setIsProvider,
  setLastName,
  setPassword,
}: IuseSignUpEffects) => {
  useEffect(() => {
    if (!addUser) return;

    // After user signed up successfully
    // Reset state and redirect to sign in screen
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setIsProvider(false);

    setTimeout(() => {
      navigation.reset({ routes: [{ name: "Sign in" }] });
    }, 5000);
  }, [addUser]);
};
