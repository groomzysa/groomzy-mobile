import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";
import { View, Text } from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { TAB_ICON } from "./constants";
import { ETabIcon, ETabIconName } from "./types";
import { theme } from "../../../../utils/theme";
import { BusinessProfile } from "../BusinessProfile/BusinessProfile";
import { Services } from "../Services/Services";

const ProviderHomeTabNavigator = createBottomTabNavigator();

function SocialsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Socials!</Text>
    </View>
  );
}

export const ProviderHomeNavigator: FC = () => {
  return (
    <ProviderHomeTabNavigator.Navigator
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
      <ProviderHomeTabNavigator.Screen
        name={ETabIconName.Business_Profile}
        component={BusinessProfile}
      />
      <ProviderHomeTabNavigator.Screen
        name={ETabIconName.Services}
        component={Services}
      />
      <ProviderHomeTabNavigator.Screen
        name={ETabIconName.Socials}
        component={SocialsScreen}
      />
    </ProviderHomeTabNavigator.Navigator>
  );
};
