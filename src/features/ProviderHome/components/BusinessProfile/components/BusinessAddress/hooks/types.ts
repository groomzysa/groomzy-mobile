import { MutationDefinition } from "@reduxjs/toolkit/dist/query";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { Dispatch, SetStateAction } from "react";
import {
  Address,
  Exact,
  InputMaybe,
} from "../../../../../../../api/graphql/api.schema";
import { AddProviderAddressMutationResult } from "../../../../../../../api/graphql/mutations/provider/addProviderAddress.generated";
import { UpdateProviderAddressMutationResult } from "../../../../../../../api/graphql/mutations/provider/updateProviderAddress.generated";

export interface IuseBusinessAddressEffectsParams {
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  successMessage: string;
  addProviderAddress?: Address;
  setStreetNumber: Dispatch<SetStateAction<string>>;
  setStreetName: Dispatch<SetStateAction<string>>;
  setTownName: Dispatch<SetStateAction<string>>;
  setCityName: Dispatch<SetStateAction<string>>;
  setAreaCode: Dispatch<SetStateAction<string>>;
  updateProviderAddress?: Address;
}

export interface IaddProviderAddresshandlerParams {
  streetNumber: string;
  streetName: string;
  townName: string;
  cityName: string;
  provinceName: string;
  areaCode: string;
  setStreetNumberError: Dispatch<SetStateAction<string>>;
  setStreetNameError: Dispatch<SetStateAction<string>>;
  setTownNameError: Dispatch<SetStateAction<string>>;
  setCityNameError: Dispatch<SetStateAction<string>>;
  setProvinceNameError: Dispatch<SetStateAction<string>>;
  setAreaCodeError: Dispatch<SetStateAction<string>>;
  addProviderAddressTrigger: MutationTrigger<
    MutationDefinition<
      Exact<{
        streetNumber: string;
        streetName: string;
        town: string;
        city: string;
        province: string;
        areaCode: string;
      }>,
      any,
      "Provider",
      AddProviderAddressMutationResult,
      "api"
    >
  >;
}

export interface IupdateProviderAddresshandlerParams {
  addressId?: number;
  streetNumber: string;
  streetName: string;
  townName: string;
  cityName: string;
  provinceName: string;
  areaCode: string;
  updateProviderAddressTrigger: MutationTrigger<
    MutationDefinition<
      Exact<{
        addressId: number;
        streetNumber?: InputMaybe<string> | undefined;
        streetName?: InputMaybe<string> | undefined;
        town?: InputMaybe<string> | undefined;
        city?: InputMaybe<string> | undefined;
        province?: InputMaybe<string> | undefined;
        areaCode?: InputMaybe<string> | undefined;
      }>,
      any,
      "Provider",
      UpdateProviderAddressMutationResult,
      "api"
    >
  >;
}
