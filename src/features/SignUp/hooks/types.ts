import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Dispatch, SetStateAction } from "react";
import { User } from "../../../api/graphql/api.schema";
import { TRootAppDrawerParamList } from "../../../components/GNavigation/components/AppNavigator/types";

export interface IuseSignUpEffectsParams {
  addUser?: User;
  setFirstName: Dispatch<SetStateAction<string>>;
  setLastName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setIsProvider: Dispatch<SetStateAction<boolean>>;
  navigation: DrawerNavigationProp<
    TRootAppDrawerParamList,
    "Sign up",
    undefined
  >;
}

export interface IaddUserHandlerParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  firstNameError: string;
  lastNameError: string;
  emailError: string;
  passwordError: string;
  isProvider: boolean;
  setFirstNameError: Dispatch<SetStateAction<string>>;
  setLastNameError: Dispatch<SetStateAction<string>>;
  setEmailError: Dispatch<SetStateAction<string>>;
  setPasswordError: Dispatch<SetStateAction<string>>;
}

export interface IshowPasswordHandlerParams {
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
}
