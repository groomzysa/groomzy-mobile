import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React, { FC } from "react";

import { Home } from "../../../../features";

const HomeStack = createStackNavigator();

export const HomeNavigator: FC = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
    >
      <HomeStack.Screen
        name="_Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};
