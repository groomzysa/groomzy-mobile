import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Dispatch, SetStateAction } from "react";
import { TRootAppDrawerParamList } from "../../../../../components/GNavigation/components/AppNavigator/types";

export interface IuseSignInEffects {
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
