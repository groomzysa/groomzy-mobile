import { MutationDefinition } from "@reduxjs/toolkit/dist/query";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { Dispatch, SetStateAction } from "react";
import {
  Exact,
  InputMaybe,
  Provider,
} from "../../../../../../../api/graphql/api.schema";
import { AddProviderMutationResult } from "../../../../../../../api/graphql/mutations/provider/addProvider.generated";
import { UpdateProviderMutationResult } from "../../../../../../../api/graphql/mutations/provider/updateProvider.generated";

export interface IuseBusinessDetailsEffectsParams {
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  successMessage: string;
  setTradingName: Dispatch<SetStateAction<string>>;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  addProvider?: Provider;
  updateProvider?: Provider;
}

export interface IpickImageHandlerParams {
  setImage: Dispatch<SetStateAction<string | undefined>>;
}

export interface IaddProviderhandlerParams {
  tradingName: string;
  phoneNumber: string;
  setTradingNameError: Dispatch<SetStateAction<string>>;
  setPhoneNumberError: Dispatch<SetStateAction<string>>;
  addProviderTrigger: MutationTrigger<
    MutationDefinition<
      Exact<{
        tradingName: string;
        phone: string;
        logo?: any;
      }>,
      any,
      "Provider",
      AddProviderMutationResult,
      "api"
    >
  >;
}

export interface IupdateProviderhandlerParams {
  providerId?: number;
  tradingName: string;
  phoneNumber: string;
  updateProviderTrigger: MutationTrigger<
    MutationDefinition<
      Exact<{
        providerId: number;
        tradingName?: InputMaybe<string> | undefined;
        phone?: InputMaybe<string> | undefined;
        logo?: any;
      }>,
      any,
      "Provider",
      UpdateProviderMutationResult,
      "api"
    >
  >;
}
