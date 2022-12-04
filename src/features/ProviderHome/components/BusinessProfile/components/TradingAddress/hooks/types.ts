import { MutationDefinition } from "@reduxjs/toolkit/dist/query";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { Dispatch, SetStateAction } from "react";
import {
  Address,
  Exact,
  InputMaybe,
} from "../../../../../../../api/graphql/api.schema";
import { AddTradingAddressMutationResult } from "../../../../../../../api/graphql/mutations/provider/addTradingAddress.generated";
import { UpdateTradingAddressMutationResult } from "../../../../../../../api/graphql/mutations/provider/updateTradingAddress.generated";

export interface IuseTradingAddressEffectsParams {
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  successMessage: string;
  addTradingAddress?: Address;
  setStreetNumber: Dispatch<SetStateAction<string>>;
  setStreetName: Dispatch<SetStateAction<string>>;
  setTownName: Dispatch<SetStateAction<string>>;
  setCityName: Dispatch<SetStateAction<string>>;
  setAreaCode: Dispatch<SetStateAction<string>>;
  updateTradingAddress?: Address;
}

export interface IaddTradingAddresshandlerParams {
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
  addTradingAddressTrigger: MutationTrigger<
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
      AddTradingAddressMutationResult,
      "api"
    >
  >;
}

export interface IupdateTradingAddresshandlerParams {
  addressId?: number;
  streetNumber: string;
  streetName: string;
  townName: string;
  cityName: string;
  provinceName: string;
  areaCode: string;
  updateTradingAddressTrigger: MutationTrigger<
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
      UpdateTradingAddressMutationResult,
      "api"
    >
  >;
}
