import { DayType } from "../../../api/graphql/api.schema";
import { PickerOption } from "../../../utils/types";

/**
 *
 * States
 *
 */

export interface IProviderHomeSliceState {
  dayOptions: PickerOption<DayType>[];
}

/**
 *
 * Actions
 *
 */

export interface IProviderHomeSliceSetDayOptionsAction {
  type: string;
  payload: {
    dayOptions: PickerOption<DayType>[];
  };
}
