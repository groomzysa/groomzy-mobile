import React, { FC } from "react";
import { Platform, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
//@ts-ignore
import { SvgXml as SvgXmlWeb } from "react-native-svgxml-web";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";

import { starSVG } from "../../../../../assets/star";
import { GCarousel } from "../../../../components";
import { setHideDrawerHeader } from "../../../../store/slices/appSlice";
import { addressName, fullName } from "../../util";
import {
  Caption,
  Info,
  ProviderSummaryCard,
  Rating,
  Section,
  SectionEnd,
  Title,
  ViewButtonContainer,
  ViewButtonText,
} from "./styles";
import { IProviderSummaryProps } from "./types";

export const ProviderSummary: FC<IProviderSummaryProps> = ({
  provider,
  navigation,
}) => {
  const { user, profile } = provider;
  const dispatch = useDispatch();
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
        <Section>
          <Title>{profile?.tradingName || user?.firstName || "Provider"}</Title>
          <SectionEnd>
            <TouchableOpacity
              onPress={() => {
                dispatch(setHideDrawerHeader({ hideDrawerHeader: true }));
                navigation.navigate("ProviderTrading");
              }}
            >
              <ViewButtonContainer>
                <Ionicons name="eye-outline" size={20} color="white" />
                <ViewButtonText>View</ViewButtonText>
              </ViewButtonContainer>
            </TouchableOpacity>
          </SectionEnd>
        </Section>
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

        <Caption>{profile?.address && addressName(profile.address)}</Caption>
      </Info>
    </ProviderSummaryCard>
  );
};
