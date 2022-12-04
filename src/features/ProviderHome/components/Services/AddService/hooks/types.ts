import { BaseQueryFn, MutationDefinition } from "@reduxjs/toolkit/dist/query";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { Dispatch, SetStateAction } from "react";
import {
  CategoryType,
  DurationUnitType,
  Exact,
  Service,
} from "../../../../../../api/graphql/api.schema";
import { AddServiceMutationResult } from "../../../../../../api/graphql/mutations/service/addService.generated";

export interface IuseAddServiceEffectsParams {
  addService: Service | undefined;
  successMessage: string;
  setName: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setPrice: Dispatch<SetStateAction<string>>;
  setDuration: Dispatch<SetStateAction<string>>;
  setDurationUnit: Dispatch<SetStateAction<DurationUnitType | undefined>>;
  setCategory: Dispatch<SetStateAction<CategoryType | undefined>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  hideDialog: () => void;
}

export interface IaddServiceHandlerParams {
  name: string;
  description: string;
  price: string;
  duration: string;
  durationUnit: DurationUnitType | undefined;
  category: CategoryType | undefined;
  nameError: string;
  descriptionError: string;
  priceError: string;
  durationError: string;
  durationUnitError: string;
  categoryError: string;
  setNameError: Dispatch<SetStateAction<string>>;
  setDescriptionError: Dispatch<SetStateAction<string>>;
  setPriceError: Dispatch<SetStateAction<string>>;
  setDurationError: Dispatch<SetStateAction<string>>;
  setDurationUnitError: Dispatch<SetStateAction<string>>;
  setCategoryError: Dispatch<SetStateAction<string>>;
  addServiceTrigger: MutationTrigger<
    MutationDefinition<
      Exact<{
        name: string;
        description: string;
        price: number;
        duration: number;
        durationUnit: DurationUnitType;
        inHouse: boolean;
        category: CategoryType;
      }>,
      any,
      "Services",
      AddServiceMutationResult,
      "api"
    >
  >;
}