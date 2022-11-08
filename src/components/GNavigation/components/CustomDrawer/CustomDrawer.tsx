import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React, { FC } from "react";
import { ImageBackground, View, Image, Text } from "react-native";
import {
  AppDrawerHeaderImage,
  AppDrawerHeaderImageBackground,
  AppDrawerText,
  AppDrawerVersionContainer,
  AppDrawerVersionContent,
  DrawerItemListContainer,
  DrawerUserName,
} from "./styles";

export const CustomDrawer: FC<DrawerContentComponentProps> = (props) => {
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
          <Text>John Doe</Text>
        </DrawerUserName>
      </AppDrawerHeaderImageBackground>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#607d8b" }}
      >
        <DrawerItemListContainer>
          <DrawerItemList {...props} />
        </DrawerItemListContainer>
      </DrawerContentScrollView>
      <AppDrawerVersionContainer>
        <AppDrawerVersionContent>
          <AppDrawerText>Groomzy (EST 2020)</AppDrawerText>

          <AppDrawerText>v1.0.0</AppDrawerText>
        </AppDrawerVersionContent>
      </AppDrawerVersionContainer>
    </View>
  );
};
