import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import {
  Flex1,
  FlexRowContainer,
} from "../../../../../../../../utils/common/styles";
import { theme } from "../../../../../../../../utils/theme";
import { TradingTimeCard, TradingTimeActionsButtonContainer } from "./styles";
import { ViewTradingTime } from "../ViewTradingTime/ViewTradingTime";
import { UpdateTradingTime } from "../UpdateTradingTime/UpdateTradingTime";
import { DeleteTradingTime } from "../DeleteTradingTime/DeleteTradingTime";
import { ITradingTimeProps } from "./types";
import { useDispatch } from "react-redux";
import { setOperatingTime } from "../../../../../../../../store/slices/providerHomeSlice/providerHomeSlice";

export const TradingTime: FC<ITradingTimeProps> = ({ operatingTime }) => {
  const [updateDialogVisible, setUpdateDialogVisible] = React.useState(false);
  const [viewDialogVisible, setViewDialogVisible] = React.useState(false);
  const [deleteDialogVisible, setDeleteDialogVisible] = React.useState(false);
  const dispatch = useDispatch();

  /**
   *
   * Handlers
   *
   */
  const showUpdateDialogHandler = () => {
    dispatch(setOperatingTime({ operatingTime }));
    setUpdateDialogVisible(true);
  };
  const showViewDialogHandler = () => {
    dispatch(setOperatingTime({ operatingTime }));
    setViewDialogVisible(true);
  };
  const showDeleteDialogHandler = () => {
    dispatch(setOperatingTime({ operatingTime }));
    setDeleteDialogVisible(true);
  };

  const hideUpdateDialogHandler = () => {
    dispatch(setOperatingTime({ operatingTime: undefined }));
    setUpdateDialogVisible(false);
  };
  const hideViewDialogHandler = () => {
    dispatch(setOperatingTime({ operatingTime: undefined }));
    setViewDialogVisible(false);
  };
  const hideDeleteDialogHandler = () => {
    dispatch(setOperatingTime({ operatingTime: undefined }));
    setDeleteDialogVisible(false);
  };

  return (
    <TradingTimeCard>
      <Card.Title
        title={operatingTime.day}
        titleStyle={{ fontWeight: "500", fontFamily: theme.fonts.heading }}
      />
      <Card.Content>
        <FlexRowContainer>
          <Flex1>
            <Text>{operatingTime.opens}</Text>
          </Flex1>
          <Flex1>
            <Text>{operatingTime.closes}</Text>
          </Flex1>
        </FlexRowContainer>
      </Card.Content>
      <Card.Actions>
        <TouchableOpacity onPress={showViewDialogHandler}>
          <TradingTimeActionsButtonContainer>
            {/* @ts-ignore */}
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="eye-outline" size={22} color={"lightblue"} />
            </IconComponentProvider>
          </TradingTimeActionsButtonContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={showUpdateDialogHandler}>
          <TradingTimeActionsButtonContainer>
            {/* @ts-ignore */}
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="briefcase-edit-outline" size={22} color={"orange"} />
            </IconComponentProvider>
          </TradingTimeActionsButtonContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={showDeleteDialogHandler}>
          <TradingTimeActionsButtonContainer>
            {/* @ts-ignore */}
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="delete-outline" size={22} color={"red"} />
            </IconComponentProvider>
          </TradingTimeActionsButtonContainer>
        </TouchableOpacity>
      </Card.Actions>

      <ViewTradingTime
        operatingTime={operatingTime}
        visible={viewDialogVisible}
        hideDialog={hideViewDialogHandler}
      />
      <UpdateTradingTime
        visible={updateDialogVisible}
        hideDialog={hideUpdateDialogHandler}
      />

      <DeleteTradingTime
        operatingTime={operatingTime}
        visible={deleteDialogVisible}
        hideDialog={hideDeleteDialogHandler}
      />
    </TradingTimeCard>
  );
};
