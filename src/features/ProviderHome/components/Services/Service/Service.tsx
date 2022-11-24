import React, { FC } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Card } from "react-native-paper";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ServiceCard, ViewButtonContainer } from "./styles";
import { IServiceProps } from "./types";
import { Flex1, FlexColumContainer } from "../../../../../utils/common/styles";
import { FlexRowContainer } from "../../BusinessProfile/styles";
import { theme } from "../../../../../utils/theme";

export const Service: FC<IServiceProps> = ({ service }) => {
  const {
    name = "",
    price = 0,
    description = "",
    duration = 0,
    durationUnit = "",
  } = service;
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
        <TouchableOpacity onPress={() => {}}>
          <ViewButtonContainer>
            {/* @ts-ignore */}
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="eye-outline" size={22} color={"lightblue"} />
            </IconComponentProvider>
          </ViewButtonContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <ViewButtonContainer>
            {/* @ts-ignore */}
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="briefcase-edit-outline" size={22} color={"orange"} />
            </IconComponentProvider>
          </ViewButtonContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <ViewButtonContainer>
            {/* @ts-ignore */}
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="delete-outline" size={22} color={"red"} />
            </IconComponentProvider>
          </ViewButtonContainer>
        </TouchableOpacity>
      </Card.Actions>
    </ServiceCard>
  );
};
