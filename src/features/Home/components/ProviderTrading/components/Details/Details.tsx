import React, { FC, useState } from "react";
import { Text } from "react-native";
import * as Location from "expo-location";

import {
  Container,
  Content,
  DetailCard,
  Header,
  MapViewContainer,
  TextStyled,
} from "./styles";
import { GErrorMessage, GTitle } from "../../../../../../components";
import { useSelector } from "react-redux";
import { addressName } from "../../../../util";
import { Marker } from "react-native-maps";
import { INITIAL_REGION } from "./constants";
import { useDetailsEffects, useDetailsHandlers } from "./hooks";
import { RootState } from "../../../../../../store/store";
import {
  Flex1,
  FlexRowContainer,
  FlexRowEndContainer,
} from "../../../../../../utils/common/styles";
import { isEmpty } from "lodash";

export const Details: FC = () => {
  const {
    home: { provider },
  } = useSelector<RootState, Pick<RootState, "home">>((state) => state);
  const [locationStatus, setLocationStatus] =
    useState<Location.PermissionStatus>();
  const [providerCoordinate, setProviderCoordinate] =
    useState<Location.LocationGeocodedLocation>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  /**
   *
   * Custom hooks
   *
   */
  const { visitSocial } = useDetailsHandlers();

  useDetailsEffects({
    locationStatus,
    setErrorMessage,
    setLocationStatus,
    setProviderCoordinate,
    provider,
  });

  return (
    <Container>
      <Content>
        {errorMessage && <GErrorMessage message={errorMessage} />}
        <MapViewContainer
          initialRegion={INITIAL_REGION}
          region={
            providerCoordinate
              ? {
                  latitude: providerCoordinate.latitude,
                  longitude: providerCoordinate.longitude,
                  latitudeDelta: 0.09,
                  longitudeDelta: 0.09,
                }
              : undefined
          }
        >
          {providerCoordinate && (
            <Marker
              coordinate={{
                latitude: providerCoordinate.latitude,
                longitude: providerCoordinate.longitude,
              }}
              title={
                provider?.addresses?.[0]
                  ? addressName(provider.addresses[0])
                  : ""
              }
            />
          )}
        </MapViewContainer>
        {!isEmpty(provider?.socials) && (
          <>
            <Header>Trading socials</Header>
            {provider?.socials?.map(({ name, username }) => (
              <DetailCard key={name} elevation={1}>
                <DetailCard.Content>
                  <FlexRowContainer>
                    <Flex1>
                      <Text>{name}</Text>
                    </Flex1>
                    <FlexRowEndContainer>
                      <TextStyled onPress={() => visitSocial(name!, username!)}>
                        {username}
                      </TextStyled>
                    </FlexRowEndContainer>
                  </FlexRowContainer>
                </DetailCard.Content>
              </DetailCard>
            ))}
          </>
        )}

        <Header>Trading times</Header>
        {provider?.operatingTimes?.map(({ day, opens, closes }) => (
          <DetailCard key={day} elevation={1}>
            <DetailCard.Content>
              <FlexRowContainer>
                <Flex1>
                  <Text>{day}</Text>
                </Flex1>
                <FlexRowEndContainer>
                  <Text>{`${opens} - ${closes}`}</Text>
                </FlexRowEndContainer>
              </FlexRowContainer>
            </DetailCard.Content>
          </DetailCard>
        ))}
      </Content>
    </Container>
  );
};
