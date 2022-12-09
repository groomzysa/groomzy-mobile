import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { DayType } from "../../../../../../../../api/graphql/api.schema";
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

export const TradingTime: FC<ITradingTimeProps> = ({ operatingTime }) => {
  const [updateDialogVisible, setUpdateDialogVisible] = React.useState(false);
  const [viewDialogVisible, setViewDialogVisible] = React.useState(false);
  const [deleteDialogVisible, setDeleteDialogVisible] = React.useState(false);

  /**
   *
   * Handlers
   *
   */
  const showUpdateDialogHandler = () => setUpdateDialogVisible(true);
  const showViewDialogHandler = () => setViewDialogVisible(true);
  const showDeleteDialogHandler = () => setDeleteDialogVisible(true);

  const hideUpdateDialogHandler = () => setUpdateDialogVisible(false);
  const hideViewDialogHandler = () => setViewDialogVisible(false);
  const hideDeleteDialogHandler = () => setDeleteDialogVisible(false);

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
        operatingTime={operatingTime}
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
