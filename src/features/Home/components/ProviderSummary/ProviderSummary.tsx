import React, { FC } from "react";
import { Platform, TouchableOpacity, View, Text } from "react-native";
import { Button } from "react-native-paper";
import { SvgXml } from "react-native-svg";
//@ts-ignore
import { SvgXml as SvgXmlWeb } from "react-native-svgxml-web";

import { starSVG } from "../../../../../assets/star";
import { GCarousel } from "../../../../components";
import { addressName, fullName } from "../../util";
import {
  Caption,
  Info,
  ProviderSummaryCard,
  Rating,
  Section,
  SectionEnd,
  Title,
} from "./styles";
import { IProviderSummaryProps } from "./types";

export const ProviderSummary: FC<IProviderSummaryProps> = ({ provider }) => {
  const { user, profile } = provider;
  const { firstName, lastName } = user;
  const { address } = profile;
  const placeholderImageUrl =
    "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  return (
    <ProviderSummaryCard>
      <GCarousel
        data={[
          placeholderImageUrl,
          placeholderImageUrl,
          placeholderImageUrl,
          placeholderImageUrl,
        ]}
      />
      <Info>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Title>{fullName(firstName, lastName)}</Title>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: "#607d8b",
              marginLeft: 10,
              width: 50,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              View
            </Text>
          </TouchableOpacity>
        </View>
        <Section>
          <Rating>
            {[1, 2, 3, 4, 5].map((rate, index) => {
              return Platform.OS === "web" ? (
                <SvgXmlWeb key={index} xml={starSVG} width={20} height={20} />
              ) : (
                <SvgXml key={index} xml={starSVG} width={20} height={20} />
              );
            })}
          </Rating>
          <SectionEnd>
            <Caption>10.00 km away</Caption>
          </SectionEnd>
        </Section>

        <Caption>{addressName(address)}</Caption>
      </Info>
    </ProviderSummaryCard>
  );
};
