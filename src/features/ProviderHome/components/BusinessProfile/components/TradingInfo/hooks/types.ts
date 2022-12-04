import { MutationDefinition } from "@reduxjs/toolkit/dist/query";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { Dispatch, SetStateAction } from "react";
import {
  Exact,
  InputMaybe,
  Provider,
} from "../../../../../../../api/graphql/api.schema";
import { AddTradingInfoMutationResult } from "../../../../../../../api/graphql/mutations/provider/addTradingInfo.generated";
import { UpdateTradingInfoMutationResult } from "../../../../../../../api/graphql/mutations/provider/updateTradingInfo.generated";

export interface IuseTradingInfoEffectsParams {
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  successMessage: string;
  setTradingName: Dispatch<SetStateAction<string>>;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  addTradingInfo?: Provider;
  updateTradingInfo?: Provider;
}

export interface IpickImageHandlerParams {
  setImage: Dispatch<SetStateAction<string | undefined>>;
}

export interface IaddTradingInfohandlerParams {
  tradingName: string;
  phoneNumber: string;
  setTradingNameError: Dispatch<SetStateAction<string>>;
  setPhoneNumberError: Dispatch<SetStateAction<string>>;
  addTradingInfoTrigger: MutationTrigger<
    MutationDefinition<
      Exact<{
        tradingName: string;
        phone: string;
        logo?: any;
      }>,
      any,
      "Provider",
      AddTradingInfoMutationResult,
      "api"
    >
  >;
}

export interface IupdateTradingInfohandlerParams {
  providerId?: number;
  tradingName: string;
  phoneNumber: string;
  updateTradingInfoTrigger: MutationTrigger<
    MutationDefinition<
      Exact<{
        providerId: number;
        tradingName?: InputMaybe<string> | undefined;
        phone?: InputMaybe<string> | undefined;
        logo?: any;
      }>,
      any,
      "Provider",
      UpdateTradingInfoMutationResult,
      "api"
    >
  >;
}
