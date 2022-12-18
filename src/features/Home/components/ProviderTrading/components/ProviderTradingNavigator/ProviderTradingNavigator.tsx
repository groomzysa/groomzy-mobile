import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { TAB_ICON } from "./constants";
import { ETabIcon, ETabIconName } from "./types";
import { theme } from "../../../../../../utils/theme";
import { Services } from "../Services/Services";
import { Details } from "../Details/Details";

const ProviderTradingTabNavigator = createBottomTabNavigator();

export const ProviderTradingNavigator: FC = () => {
  return (
    <ProviderTradingTabNavigator.Navigator
      screenOptions={({ route }) => {
        const iconName: ETabIcon = TAB_ICON[
          route.name as ETabIconName
        ] as ETabIcon;

        return {
          tabBarIcon: ({ size, color }: { size: number; color: string }) => (
            // @ts-ignore
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name={iconName} size={size} color={color} />
            </IconComponentProvider>
          ),
          headerShown: false,
          tabBarActiveTintColor: theme.colors.brand.primary,
          tabBarInactiveTintColor: "lightgray",
          tabBarHideOnKeyboard: false,
        };
      }}
    >
      <ProviderTradingTabNavigator.Screen
        name={ETabIconName.Services}
        component={Services}
      />
      <ProviderTradingTabNavigator.Screen
        name={ETabIconName.Provider_Details}
        component={Details}
      />
    </ProviderTradingTabNavigator.Navigator>
  );
};
