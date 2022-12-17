import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setHideDrawerHeader } from "../../../../../store/slices/appSlice/appSlice";
import { IuseRequestPasswordResetEffects } from "./types";

export const useRequestPasswordResetEffects = ({
  message,
  navigation,
  setEmail,
  setIsProvider,
}: IuseRequestPasswordResetEffects) => {
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
      dispatch(setHideDrawerHeader({ hideDrawerHeader: true }));
      navigation.navigate("Reset password");
    }, 5000);
  }, [successMessage]);

  useEffect(() => {
    if (!message) return;

    setSuccessMessage(message);

    // After user signed in successfully
    // Reset state
    setEmail("");
    setIsProvider(false);
  }, [message]);

  return { successMessage };
};
