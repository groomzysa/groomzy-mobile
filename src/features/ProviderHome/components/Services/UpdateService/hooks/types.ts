import { Dispatch, SetStateAction } from "react";
import {
  CategoryType,
  DurationUnitType,
  Service,
} from "../../../../../../api/graphql/api.schema";

export interface IuseUpdateServiceEffectsParams {
  updateService: Service | undefined;
  setName: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setPrice: Dispatch<SetStateAction<string>>;
  setDuration: Dispatch<SetStateAction<string>>;
  setDurationUnit: Dispatch<SetStateAction<DurationUnitType | undefined>>;
  setCategory: Dispatch<SetStateAction<CategoryType | undefined>>;
  hideDialog: () => void;
}
