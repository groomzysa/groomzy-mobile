import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { theme } from "../../../../../../../../utils/theme";
import { TradingTimeCard, TradingTimeActionsButtonContainer } from "./styles";
import { ViewTradingSocial } from "../ViewTradingSocial/ViewTradingSocial";
import { UpdateTradingSocial } from "../UpdateTradingSocial/UpdateTradingSocial";
import { DeleteTradingSocial } from "../DeleteTradingSocial/DeleteTradingSocial";
import { ITradingSocialProps } from "./types";
import { useDispatch } from "react-redux";
import { setSocial } from "../../../../../../../../store/slices/providerHomeSlice/providerHomeSlice";

export const TradingSocial: FC<ITradingSocialProps> = ({ social }) => {
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
    dispatch(setSocial({ social }));
    setUpdateDialogVisible(true);
  };
  const showViewDialogHandler = () => {
    dispatch(setSocial({ social }));
    setViewDialogVisible(true);
  };
  const showDeleteDialogHandler = () => {
    dispatch(setSocial({ social }));
    setDeleteDialogVisible(true);
  };

  const hideUpdateDialogHandler = () => {
    dispatch(setSocial({ social: undefined }));
    setUpdateDialogVisible(false);
  };
  const hideViewDialogHandler = () => {
    dispatch(setSocial({ social: undefined }));
    setViewDialogVisible(false);
  };
  const hideDeleteDialogHandler = () => {
    dispatch(setSocial({ social: undefined }));
    setDeleteDialogVisible(false);
  };

  return (
    <TradingTimeCard>
      <Card.Title
        title={social.name}
        titleStyle={{ fontWeight: "500", fontFamily: theme.fonts.heading }}
      />
      <Card.Content>
        <Text>{social.username}</Text>
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

      <ViewTradingSocial
        visible={viewDialogVisible}
        hideDialog={hideViewDialogHandler}
      />
      <UpdateTradingSocial
        visible={updateDialogVisible}
        hideDialog={hideUpdateDialogHandler}
      />

      <DeleteTradingSocial
        visible={deleteDialogVisible}
        hideDialog={hideDeleteDialogHandler}
      />
    </TradingTimeCard>
  );
};
