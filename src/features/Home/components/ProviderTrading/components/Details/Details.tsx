import React, { FC, useEffect, useState } from "react";
import { Text } from "react-native";
import * as Location from 'expo-location';

import { Container, Content, MapViewContainer } from "./styles";
import { GErrorMessage } from "../../../../../../components";
import { useSelector } from "react-redux";
import { IExplorerSliceState } from "../../../../../../store/slices/explorerSlice/types";
import { addressName } from "../../../../util";
import { Marker } from "react-native-maps";
import { INITIAL_REGION } from "./constants";

export const Details: FC = () => {
  const { provider } = useSelector<{ explorer: IExplorerSliceState }, IExplorerSliceState>(
    (state) => state.explorer
  );
  const [locationStatus, setLocationStatus] = useState<Location.PermissionStatus>()
  const [providerCoordinate, setProviderCoordinate] = useState<Location.LocationGeocodedLocation>()
  const [errorMessage, setErrorMessage] = useState<string>()

  /**
   * 
   * Effects
   * 
   */

  // Request permissions if not previously requested
  useEffect(() => {
    if(Location.PermissionStatus.GRANTED) return 

    async function getPermissions() {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        setLocationStatus(status)
      } catch (error) {
        setErrorMessage((error as Error).message)
      }
    }

    getPermissions()
  }, [])

  useEffect(() => {
    if(!provider?.profile?.address) return;

    async function getProviderCordinates(address: string) {
      try {
        const coordinate = await Location.geocodeAsync(address);
        setProviderCoordinate(coordinate?.[0])
      } catch (error) {
        setErrorMessage((error as Error).message)
      }
    }

    getProviderCordinates(addressName(provider.profile.address))    
  }, [locationStatus])

  return (
    <Container>
        <Content>
          {errorMessage && <GErrorMessage message={errorMessage} />}
          <MapViewContainer
            initialRegion={INITIAL_REGION}
            region={providerCoordinate ? {
              latitude: providerCoordinate.latitude,
              longitude: providerCoordinate.longitude,
              latitudeDelta: 0.09,
              longitudeDelta: 0.09,
            } : undefined}
          >
            {providerCoordinate && <Marker 
              coordinate={{
                latitude: providerCoordinate.latitude,
                longitude: providerCoordinate.longitude,
              }}
              title={provider?.profile?.address ? addressName(provider.profile.address) : ""}
            />}
          </MapViewContainer>
          <Text>Day times</Text>
        </Content>
    </Container>
  );
};
