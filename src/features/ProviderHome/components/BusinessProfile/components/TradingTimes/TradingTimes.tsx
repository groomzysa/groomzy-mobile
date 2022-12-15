import React, { FC, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon, IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { useTradingTimesEffects, useTradingTimesHandlers } from "./hooks";
import { Space } from "../../styles";
import { AddTradingTime, TradingTime } from "./components";
import { FlatList } from "react-native-gesture-handler";
import {
  AddButtonContainer,
  AddButtonText,
  TradingTimeContainer,
} from "./styles";
import { useFetchOperatingTimes } from "../../../../../../api/hooks/queries";

export const TradingTimes: FC = () => {
  const [showOpensTime, setShowOpensTime] = useState<boolean>(false);
  const [showClosesTime, setShowClosesTime] = useState<boolean>(false);
  const [addDialogVisible, setAddDialogVisible] = React.useState(false);

  /**
   *
   * Custom hooks
   *
   */
  const { operatingTimes } = useFetchOperatingTimes();
  const { closesTimePickerHandler, opensTimePickerHandler } =
    useTradingTimesHandlers({
      setShowClosesTime,
      setShowOpensTime,
    });

  useTradingTimesEffects({
    closesTimePickerHandler,
    opensTimePickerHandler,
    showClosesTime,
    showOpensTime,
    operatingTimes,
  });

  const showAddDialogHandler = () => setAddDialogVisible(true);

  const hideAddDialogHandler = () => setAddDialogVisible(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          showAddDialogHandler();
        }}
      >
        <AddButtonContainer>
          {/* @ts-ignore */}
          <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <Icon name="plus" size={22} color={"white"} />
            <AddButtonText>Add</AddButtonText>
          </IconComponentProvider>
        </AddButtonContainer>
      </TouchableOpacity>
      <Space />
      <FlatList
        data={operatingTimes || []}
        style={{ height: 450 }}
        renderItem={({ item }) => (
          <TradingTimeContainer>
            <TradingTime operatingTime={item} />
          </TradingTimeContainer>
        )}
      />

      <AddTradingTime
        visible={addDialogVisible}
        hideDialog={hideAddDialogHandler}
      />
    </>
  );
};
