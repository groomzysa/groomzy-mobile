import React, { FC } from "react";
import { Container, Space, TabButton } from "./styles";
import { useFetchProvider } from "../../../../api/hooks/queries";
import { TradingAddress, TradingInfo, TradingTimes } from "./components";
import { TabView, SceneMap, TabBarProps } from "react-native-tab-view";
import { Animated, useWindowDimensions, View } from "react-native";
import { GErrorMessage } from "../../../../components";
import { ActivityIndicator } from "react-native-paper";

export const BusinessProfile: FC = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "tradingInfo", title: "Info" },
    { key: "tradingAddress", title: "Address" },
    { key: "tradingTimes", title: "Times" },
  ]);

  /**
   *
   * Custom hooks
   *
   */
  const { provider, providerLoading, providerHasError, providerError } =
    useFetchProvider();

  /**
   * 
   *Handlers

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
        {providerHasError && <GErrorMessage message={providerError} />}
        {providerLoading ? (
          <ActivityIndicator />
        ) : (
          <TradingInfo provider={provider} />
        )}
      </Container>
    ),
    tradingAddress: () => (
      <Container>
        <Space />
        {providerHasError && <GErrorMessage message={providerError} />}
        {providerLoading ? (
          <ActivityIndicator />
        ) : (
          <TradingAddress address={provider?.addresses?.[0]} />
        )}
      </Container>
    ),
    tradingTimes: () => (
      <Container>
        <Space />
        {providerHasError && <GErrorMessage message={providerError} />}
        {providerLoading ? <ActivityIndicator /> : <TradingTimes />}
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
