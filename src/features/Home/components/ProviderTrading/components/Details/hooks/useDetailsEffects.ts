import { useEffect } from "react";
import * as Location from "expo-location";
import { addressName } from "../../../../../util";
import { IuseDetailsEffectsParams } from "./types";

export const useDetailsEffects = ({
  locationStatus,
  setErrorMessage,
  setLocationStatus,
  setProviderCoordinate,
  provider,
}: IuseDetailsEffectsParams) => {
  // Request permissions if not previously requested
  useEffect(() => {
    if (Location.PermissionStatus.GRANTED) return;

    async function getPermissions() {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        setLocationStatus(status);
      } catch (error) {
        setErrorMessage((error as Error).message);
      }
    }

    getPermissions();
  }, []);

  useEffect(() => {
    if (!provider?.addresses?.[0]) return;

    async function getProviderCordinates(address: string) {
      try {
        const coordinate = await Location.geocodeAsync(address);
        setProviderCoordinate(coordinate?.[0]);
      } catch (error) {
        setErrorMessage((error as Error).message);
      }
    }

    getProviderCordinates(addressName(provider.addresses[0]));
  }, [locationStatus]);
};
