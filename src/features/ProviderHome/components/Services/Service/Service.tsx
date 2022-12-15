import React, { FC } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Card } from "react-native-paper";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ServiceCard, ViewButtonContainer } from "./styles";
import { IServiceProps } from "./types";
import { Flex1, FlexRowContainer } from "../../../../../utils/common/styles";
import { theme } from "../../../../../utils/theme";
import { UpdateService } from "../UpdateService/UpdateService";
import { ViewService } from "../ViewService/ViewService";
import { DeleteService } from "../DeleteService/DeleteService";
import { useDispatch } from "react-redux";
import { setService } from "../../../../../store/slices/providerHomeSlice/providerHomeSlice";

export const Service: FC<IServiceProps> = ({ service }) => {
  const {
    name = "",
    price = 0,
    description = "",
    duration = 0,
    durationUnit = "",
  } = service;

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
    dispatch(setService({ service }));
    setUpdateDialogVisible(true);
  };
  const showViewDialogHandler = () => {
    dispatch(setService({ service }));
    setViewDialogVisible(true);
  };
  const showDeleteDialogHandler = () => {
    dispatch(setService({ service }));
    setDeleteDialogVisible(true);
  };

  const hideUpdateDialogHandler = () => {
    dispatch(setService({ service: undefined }));
    setUpdateDialogVisible(false);
  };
  const hideViewDialogHandler = () => {
    dispatch(setService({ service: undefined }));
    setViewDialogVisible(false);
  };
  const hideDeleteDialogHandler = () => {
    dispatch(setService({ service: undefined }));
    setDeleteDialogVisible(false);
  };

  return (
    <ServiceCard>
      <Card.Title
        title={`(R${price?.toFixed(2)}) ${name} `}
        subtitle={`${duration?.toFixed(2)} ${durationUnit
          ?.toString()
          .toLowerCase()}`}
        titleStyle={{ fontWeight: "500", fontFamily: theme.fonts.heading }}
      />
      <Card.Content>
        <FlexRowContainer>
          <Flex1>
            <Text>{description}</Text>
          </Flex1>
        </FlexRowContainer>
      </Card.Content>
      <Card.Actions>
        <TouchableOpacity onPress={showViewDialogHandler}>
          <ViewButtonContainer>
            {/* @ts-ignore */}
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="eye-outline" size={22} color={"lightblue"} />
            </IconComponentProvider>
          </ViewButtonContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={showUpdateDialogHandler}>
          <ViewButtonContainer>
            {/* @ts-ignore */}
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="briefcase-edit-outline" size={22} color={"orange"} />
            </IconComponentProvider>
          </ViewButtonContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={showDeleteDialogHandler}>
          <ViewButtonContainer>
            {/* @ts-ignore */}
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="delete-outline" size={22} color={"red"} />
            </IconComponentProvider>
          </ViewButtonContainer>
        </TouchableOpacity>
      </Card.Actions>

      <UpdateService
        visible={updateDialogVisible}
        hideDialog={hideUpdateDialogHandler}
      />
      <ViewService
        visible={viewDialogVisible}
        hideDialog={hideViewDialogHandler}
      />
      <DeleteService
        visible={deleteDialogVisible}
        hideDialog={hideDeleteDialogHandler}
      />
    </ServiceCard>
  );
};
