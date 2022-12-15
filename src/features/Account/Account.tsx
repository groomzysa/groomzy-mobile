import React, { FC } from "react";
import { Animated, useWindowDimensions, View } from "react-native";
import { SceneMap, TabBarProps, TabView } from "react-native-tab-view";

import { AccountAddress, AccountDetails } from "./components";
import { Container, Space, TabButton } from "./styles";

export const Account: FC = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "accountDetails", title: "Details" },
    { key: "accountAddress", title: "Address" },
  ]);

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
              onPress={() => setIndex(i)}
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
