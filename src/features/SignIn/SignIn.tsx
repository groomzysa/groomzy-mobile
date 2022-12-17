import React, { FC } from "react";
import { SignInProps } from "./types";
import { SignInNavigator } from "./components";

export const SignIn: FC<SignInProps> = ({ navigation, route }) => {
  return <SignInNavigator navigation={navigation} route={route} />;
};
