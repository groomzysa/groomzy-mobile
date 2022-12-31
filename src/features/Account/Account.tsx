import React, { FC, useState } from "react";
import { Animated, useWindowDimensions, View } from "react-native";
import { SceneMap, TabBarProps, TabView } from "react-native-tab-view";
import { useDispatch } from "react-redux";
import { setIsImageUpload } from "../../store/slices/accountSlice/accountSlice";

import { AccountAddress, AccountDetails } from "./components";
import { AccountImage } from "./components/AccountImage/AccountImage";
import { Container, Space, TabButton } from "./styles";

export const Account: FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState<{ key: string; title: string }[]>([
    { key: "accountDetails", title: "Details" },
    // { key: "accountImage", title: "Image" },
    { key: "accountAddress", title: "Address" },
  ]);

  const dispatch = useDispatch();
  const layout = useWindowDimensions();

  /**
   *
   * Handlers
   *
   */

  const indexChangeHandler = (index: number) => setIndex(index);

  const renderTabBarHandler = (props: TabBarProps<any>) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          const currentTab = props.navigationState.index === i;

          return (
            <TabButton
              key={i}
              activeColor={props.activeColor || ""}
              currentTab={currentTab}
              currentTabIndex={props.navigationState.index}
              inputRangeLength={inputRange.length}
              onPress={() => {
                // TODO: Enabled once the issue for react native image upload is resolved
                // if (i === 1) {
                //   // Set to true to enable request header content type to multipart/form
                //   dispatch(setIsImageUpload({ isImageUpload: true }));
                // } else {
                //   // Set to false to disable request header content type multipart/form
                //   dispatch(setIsImageUpload({ isImageUpload: false }));
                // }

                setIndex(i);
              }}
            >
              <Animated.Text
                style={{ opacity, fontWeight: currentTab ? "500" : "normal" }}
              >
                {route.title}
              </Animated.Text>
            </TabButton>
          );
        })}
      </View>
    );
  };

  const renderSceneHandler = SceneMap({
    accountDetails: () => (
      <Container>
        <Space />
        <AccountDetails />
      </Container>
    ),
    // accountImage: () => (
    //   <Container>
    //     <Space />
    //     <AccountImage />
    //   </Container>
    // ),
    accountAddress: () => (
      <Container>
        <Space />
        <AccountAddress />
      </Container>
    ),
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderSceneHandler}
      renderTabBar={(props) =>
        renderTabBarHandler({ ...props, activeColor: "#77ccff" })
      }
      onIndexChange={indexChangeHandler}
      initialLayout={{ width: layout.width }}
    />
  );
};
