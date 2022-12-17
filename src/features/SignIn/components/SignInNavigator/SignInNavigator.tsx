import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { RequestPasswordReset } from "../RequestPasswordReset/RequestPasswordReset";
import { ResetPassword } from "../ResetPassword/ResetPassword";
import { SignIn } from "../SignIn/SignIn";
import { SignInProps } from "./types";

const Stack = createStackNavigator();

export const SignInNavigator: FC<SignInProps> = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign In"
        options={{
          headerShown: false,
        }}
      >
        {() => <SignIn navigation={navigation} route={route} />}
      </Stack.Screen>
      <Stack.Screen
        name="Request password reset"
        options={{
          headerShown: true,
        }}
      >
        {() => <RequestPasswordReset navigation={navigation} route={route} />}
      </Stack.Screen>
      <Stack.Screen
        name="Reset password"
        options={{
          headerShown: true,
        }}
      >
        {() => <ResetPassword navigation={navigation} route={route} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
