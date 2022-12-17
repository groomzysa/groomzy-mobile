import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setHideDrawerHeader } from "../../../../../store/slices/appSlice/appSlice";
import { IResetPasswordEffectsParams } from "./types";

export const useResetPasswordEffects = ({
  message,
  navigation,
  setPassword,
  setPasswordResetOTP,
}: IResetPasswordEffectsParams) => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHideDrawerHeader({ hideDrawerHeader: true }));
  }, []);

  useEffect(() => {
    if (!successMessage) return;

    setTimeout(() => {
      setSuccessMessage("");
      // Redirect to home screen
      navigation.reset({ routes: [{ name: "Sign in" }] });
    }, 5000);
  }, [successMessage]);

  useEffect(() => {
    if (!message) return;

    setSuccessMessage(message);

    // After user signed in successfully
    // Reset state
    setPassword("");
    setPasswordResetOTP("");
  }, [message]);

  return { successMessage };
};
