import { Dispatch, SetStateAction } from "react";
import * as Location from "expo-location";
import { Provider } from "../../../../../../../api/graphql/api.schema";

export interface IuseDetailsEffectsParams {
  setLocationStatus: Dispatch<
    SetStateAction<Location.PermissionStatus | undefined>
  >;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  provider?: Provider;
  setProviderCoordinate: Dispatch<
    SetStateAction<Location.LocationGeocodedLocation | undefined>
  >;
  locationStatus?: Location.PermissionStatus;
}
