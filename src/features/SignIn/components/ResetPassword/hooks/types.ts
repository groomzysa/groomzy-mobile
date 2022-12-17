import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Dispatch, SetStateAction } from "react";
import { TRootAppDrawerParamList } from "../../../../../components/GNavigation/components/AppNavigator/types";

export interface IResetPasswordEffectsParams {
  message?: string;
  setPassword: Dispatch<SetStateAction<string>>;
  setPasswordResetOTP: Dispatch<SetStateAction<string>>;
  navigation: DrawerNavigationProp<
    TRootAppDrawerParamList,
    "Sign in",
    undefined
  >;
}
