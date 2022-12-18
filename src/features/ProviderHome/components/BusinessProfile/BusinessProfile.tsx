import React, { FC } from "react";
import { Container, Space, TabButton } from "./styles";
import {
  TradingAddress,
  TradingInfo,
  TradingSocials,
  TradingTimes,
} from "./components";
import { TabView, SceneMap, TabBarProps } from "react-native-tab-view";
import { Animated, useWindowDimensions, View } from "react-native";

export const BusinessProfile: FC = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "tradingInfo", title: "Info" },
    { key: "tradingAddress", title: "Address" },
    { key: "tradingTimes", title: "Times" },
    { key: "tradingSocials", title: "Socials" },
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
    tradingInfo: () => (
      <Container>
        <Space />
        <TradingInfo />
      </Container>
    ),
    tradingAddress: () => (
      <Container>
        <Space />
        <TradingAddress />
      </Container>
    ),
    tradingTimes: () => (
      <Container>
        <Space />
        <TradingTimes />
      </Container>
    ),
    tradingSocials: () => (
      <Container>
        <Space />
        <TradingSocials />
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
