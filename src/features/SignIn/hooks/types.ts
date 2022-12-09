import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Dispatch, SetStateAction } from "react";
import { TRootAppDrawerParamList } from "../../../components/GNavigation/components/AppNavigator/types";

export interface IuseSignInEffectsParams {
  token?: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setIsProvider: Dispatch<SetStateAction<boolean>>;
  navigation: DrawerNavigationProp<
    TRootAppDrawerParamList,
    "Sign in",
    undefined
  >;
}

export interface IsignInHandlerParams {
  email: string;
  emailError: string;
  password: string;
  passwordError: string;
  setEmailError: Dispatch<SetStateAction<string>>;
  setPasswordError: Dispatch<SetStateAction<string>>;
  isProvider: boolean;
}

export interface IshowPasswordHandlerParams {
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
}
