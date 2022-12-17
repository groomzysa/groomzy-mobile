import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeToken } from "../../../../../api/helpers";
import {
  setHideDrawerHeader,
  setToken,
} from "../../../../../store/slices/appSlice/appSlice";
import { IuseSignInEffects } from "./types";

export const useSignInEffects = ({
  token,
  navigation,
  setEmail,
  setIsProvider,
  setPassword,
}: IuseSignInEffects) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHideDrawerHeader({ hideDrawerHeader: false }));
  }, []);
  useEffect(() => {
    if (!token) return;

    // After user signed in successfully
    // Reset state
    setEmail("");
    setPassword("");
    setIsProvider(false);

    // Store new token state
    dispatch(setToken({ token: token }));

    // Store new token on local storage
    async function storeNewToken(input: string) {
      await storeToken(input);
    }
    storeNewToken(token);

    // Redirect to home screen
    navigation.reset({ routes: [{ name: "Home" }] });
  }, [token]);
};
