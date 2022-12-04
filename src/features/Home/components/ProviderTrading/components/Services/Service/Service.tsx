import React, { FC } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Card } from "react-native-paper";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ServiceCard, ViewButtonContainer } from "./styles";
import { IServiceProps } from "./types";
import {
  Flex1,
  FlexRowContainer,
} from "../../../../../../../utils/common/styles";
import { theme } from "../../../../../../../utils/theme";
import { ViewService } from "../ViewService/ViewService";
import { useServiceHandlers } from "./hooks";

export const Service: FC<IServiceProps> = ({ service }) => {
  const {
    name = "",
    price = 0,
    description = "",
    duration = 0,
    durationUnit = "",
  } = service;

  const [viewDialogVisible, setViewDialogVisible] = React.useState(false);

  /**
   *
   * Custom hooks
   *
   */
  const { hideViewDialogHandler, showViewDialogHandler } = useServiceHandlers();

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
        <TouchableOpacity
          onPress={() => showViewDialogHandler({ setViewDialogVisible })}
        >
          <ViewButtonContainer>
            {/* @ts-ignore */}
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="eye-outline" size={22} color={"lightblue"} />
            </IconComponentProvider>
          </ViewButtonContainer>
        </TouchableOpacity>
      </Card.Actions>
      <ViewService
        service={service}
        visible={viewDialogVisible}
        hideDialog={() => hideViewDialogHandler({ setViewDialogVisible })}
      />
    </ServiceCard>
  );
};
