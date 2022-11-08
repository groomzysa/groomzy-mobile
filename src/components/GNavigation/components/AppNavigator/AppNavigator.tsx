import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import React, { FC } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Text } from "react-native";

import { theme } from "../../../../utils/theme";
import { GSafeArea } from "../../../GSafeArea/GSafeArea";
import { CustomDrawer } from "../CustomDrawer/CustomDrawer";
import { HomeNavigator } from "../HomeNavigator/HomeNavigator";
import { TAB_ICON } from "./constants";
import { IoniconsType, tabIconNameType } from "./types";
import { SignIn, SignUp } from "../../../../features";
import { RootAppDrawerParamList } from "../../../../utils/types";

const Drawer = createDrawerNavigator<RootAppDrawerParamList>();

const About: FC = () => (
  <GSafeArea>
    <Text>About screen</Text>
  </GSafeArea>
);

const Contact: FC = () => (
  <GSafeArea>
    <Text>Contact</Text>
  </GSafeArea>
);

const Profile: FC = () => (
  <GSafeArea>
    <Text>Profile</Text>
  </GSafeArea>
);

const SignOut: FC = () => (
  <GSafeArea>
    <Text>Sign out</Text>
  </GSafeArea>
);

const TsAndCs: FC = () => (
  <GSafeArea>
    <Text>Ts and Cs</Text>
  </GSafeArea>
);

const createScreenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}) => {
  const iconName: IoniconsType = TAB_ICON[
    route.name as tabIconNameType
  ] as IoniconsType;
  return {
    tabBarIcon: ({ size, color }: { size: number; color: string }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    drawerActiveTintColor: theme.colors.brand.primary,
    drawerInactiveTintColor: "gray",
  };
};

export const AppNavigator: FC = () => (
  <NavigationContainer>
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={createScreenOptions}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name="information-circle-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="phone-portrait-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Sign in"
        component={SignIn}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="log-in-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sign up"
        component={SignUp}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-add-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sign out"
        component={SignOut}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="exit-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Ts and Cs"
        component={TsAndCs}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="documents-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);
