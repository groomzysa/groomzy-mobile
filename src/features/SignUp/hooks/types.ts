import { DrawerNavigationProp } from "@react-navigation/drawer";
import { MutationDefinition } from "@reduxjs/toolkit/dist/query";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { Dispatch, SetStateAction } from "react";
import { Exact, User, UserRole } from "../../../api/graphql/api.schema";
import { AddUserMutationResult } from "../../../api/graphql/mutations/user/addUser.generated";
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
  addUserTrigger: MutationTrigger<
    MutationDefinition<
      Exact<{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: UserRole;
        userImage?: any;
      }>,
      any,
      never,
      AddUserMutationResult,
      "api"
    >
  >;
}

export interface IshowPasswordHandlerParams {
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
}
