import { DrawerNavigationProp } from "@react-navigation/drawer";
import { MutationDefinition } from "@reduxjs/toolkit/dist/query";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { Dispatch, SetStateAction } from "react";
import { Exact, UserRole } from "../../../api/graphql/api.schema";
import { SignInMutationResult } from "../../../api/graphql/mutations/user/signIn.generated";
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
  signInTrigger: MutationTrigger<
    MutationDefinition<
      Exact<{
        email: string;
        password: string;
        role: UserRole;
      }>,
      any,
      never,
      SignInMutationResult,
      "api"
    >
  >;
}

export interface IshowPasswordHandlerParams {
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
}
