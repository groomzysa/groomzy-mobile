import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { setHideDrawerHeader } from "../../../../store/slices/appSlice/appSlice";
import { SafeAreaViewContainer } from "../../../../utils/common/styles";
import { HomeExplorer } from "../HomeExplorer/HomeExplorer";
import { ProviderTrading } from "../ProviderTrading/ProviderTrading";
import { THomeStackParamList } from "./types";

export const HomeNavigator: FC = () => {
  const dispatch = useDispatch();

  const Stack = createStackNavigator<THomeStackParamList>();

  return (
    <SafeAreaViewContainer>
      <Stack.Navigator initialRouteName="HomeExplorer">
        <Stack.Screen
          name="HomeExplorer"
          component={HomeExplorer}
          options={{
            title: "Home",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ProviderTrading"
          component={ProviderTrading}
          options={{
            title: "Provider trading",
          }}
          listeners={{
            beforeRemove: () => {
              dispatch(setHideDrawerHeader({ hideDrawerHeader: false }));
            },
          }}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </SafeAreaViewContainer>
  );
};
