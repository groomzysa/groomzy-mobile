import { MutationDefinition } from "@reduxjs/toolkit/dist/query";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { Dispatch, SetStateAction } from "react";
import {
  CategoryType,
  DurationUnitType,
  Exact,
  InputMaybe,
  Service,
} from "../../../../../../api/graphql/api.schema";
import { UpdateServiceMutationResult } from "../../../../../../api/graphql/mutations/service/updateService.generated";

export interface IuseUpdateServiceEffectsParams {
  updateService: Service | undefined;
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

export interface IupdateServiceHandlerParams {
  serviceId: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  durationUnit: DurationUnitType | undefined;
  category: CategoryType | undefined;
}
