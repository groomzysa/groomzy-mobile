import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../../../api/helpers";
import { setToken, setUser } from "../../../../store/slices/appSlice";
import { IAppSliceState } from "../../../../store/slices/types";
import {
  AppDrawerHeaderImage,
  AppDrawerHeaderImageBackground,
  AppDrawerText,
  AppDrawerBottomContainer,
  AppDrawerVersionContent,
  DrawerItemListContainer,
  DrawerUserName,
  SignOutText,
} from "./styles";
import { ICustomDrawerProps } from "./types";

export const CustomDrawer: FC<ICustomDrawerProps> = ({ drawerProps }) => {
  const { user } = useSelector<{ appSlice: IAppSliceState }, IAppSliceState>(
    (state) => state.appSlice
  );
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <AppDrawerHeaderImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1471047283799-ebd97acc0bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGJhY2tncm91bmQlMjBibHVlJTIwZ3JheXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }}
      >
        <AppDrawerHeaderImage
          source={{
            uri: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          }}
        />
        <DrawerUserName>
          {
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              {user ? `${user?.firstName} ${user?.lastName}` : "Not signed in"}
            </Text>
          }
          {user && (
            <View>
              <TouchableOpacity
                onPress={async () => {
                  await removeToken();
                  dispatch(setToken({ token: undefined }));
                  dispatch(setUser({ user: undefined }));
                  drawerProps.navigation.navigate("Home");
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="exit-outline" size={22} color="white" />
                  <SignOutText>Sign Out</SignOutText>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </DrawerUserName>
      </AppDrawerHeaderImageBackground>
      <DrawerContentScrollView {...drawerProps}>
        <DrawerItemListContainer>
          <DrawerItemList {...drawerProps} />
        </DrawerItemListContainer>
      </DrawerContentScrollView>
      <AppDrawerBottomContainer>
        <AppDrawerVersionContent>
          <AppDrawerText>Groomzy (EST 2020)</AppDrawerText>
          <AppDrawerText>v1.0.0</AppDrawerText>
        </AppDrawerVersionContent>
      </AppDrawerBottomContainer>
    </View>
  );
};
