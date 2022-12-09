import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Text } from "react-native";

import { theme } from "../../../../utils/theme";
import { GSafeArea } from "../../../GSafeArea/GSafeArea";
import { CustomDrawer } from "../CustomDrawer/CustomDrawer";
import { TRootAppDrawerParamList } from "./types";
import { Home, ProviderHome, SignIn, SignUp } from "../../../../features";
import { UserRole } from "../../../../api/graphql/api.schema";
import { useSelector } from "react-redux";
import { IAppSliceState } from "../../../../store/slices/appSlice/types";
import { RootState } from "../../../../store/store";

const Drawer = createDrawerNavigator<TRootAppDrawerParamList>();

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

const Account: FC = () => (
  <GSafeArea>
    <Text>Account</Text>
  </GSafeArea>
);

const TsAndCs: FC = () => (
  <GSafeArea>
    <Text>Ts and Cs</Text>
  </GSafeArea>
);

const createScreenOptions = () => {
  return {
    drawerActiveTintColor: theme.colors.brand.primary,
    drawerInactiveTintColor: "gray",
  };
};

export const AppNavigator: FC = () => {
  const {
    app: { user, hideDrawerHeader },
  } = useSelector<RootState, Pick<RootState, "app">>((state) => state);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer drawerProps={props} />}
        screenOptions={createScreenOptions}
        initialRouteName="Home"
      >
        {!user && (
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              drawerIcon: ({ color }) => (
                <Ionicons name="home-outline" size={22} color={color} />
              ),
              headerShown: !hideDrawerHeader,
            }}
          />
        )}
        {user && user.role === UserRole.Provider && (
          <Drawer.Screen
            name="Home"
            component={ProviderHome}
            options={{
              drawerIcon: ({ color }) => (
                <Ionicons name="home-outline" size={22} color={color} />
              ),
            }}
          />
        )}
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
          name="Account"
          component={Account}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />

        {!user && (
          <Drawer.Screen
            name="Sign in"
            component={SignIn}
            options={{
              drawerIcon: ({ color }) => (
                <Ionicons name="log-in-outline" size={22} color={color} />
              ),
            }}
          />
        )}
        {!user && (
          <Drawer.Screen
            name="Sign up"
            component={SignUp}
            options={{
              drawerIcon: ({ color }) => (
                <Ionicons name="person-add-outline" size={22} color={color} />
              ),
            }}
          />
        )}
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
};
