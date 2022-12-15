import {
  DayType,
  OperatingTime,
  Service,
} from "../../../api/graphql/api.schema";
import { PickerOption } from "../../../utils/types";

/**
 *
 * States
 *
 */

export interface IProviderHomeSliceState {
  dayOptions: PickerOption<DayType>[];
  operatingTime?: OperatingTime;
  service?: Service;
}

/**
 *
 * Actions
 *
 */

export interface ISetDayOptionsAction {
  type: string;
  payload: {
    dayOptions: PickerOption<DayType>[];
  };
}

export interface ISetOperatingTimeAction {
  type: string;
  payload: {
    operatingTime?: OperatingTime;
  };
}

export interface ISetServiceAction {
  type: string;
  payload: {
    service?: Service;
  };
}
