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
        service={service}
        visible={updateDialogVisible}
        hideDialog={hideUpdateDialogHandler}
      />
      <ViewService
        service={service}
        visible={viewDialogVisible}
        hideDialog={hideViewDialogHandler}
      />
      <DeleteService
        service={service}
        visible={deleteDialogVisible}
        hideDialog={hideDeleteDialogHandler}
      />
    </ServiceCard>
  );
};
