import {
  DayType,
  OperatingTime,
  Service,
  Social,
} from "../../../api/graphql/api.schema";
import { PickerOption } from "../../../utils/types";

/**
 *
 * States
 *
 */

export interface IProviderHomeSliceState {
  dayOptions: PickerOption<DayType>[];
  socialOptions: PickerOption<string>[];
  operatingTime?: OperatingTime;
  service?: Service;
  social?: Social;
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

export interface ISetSocialOptionsAction {
  type: string;
  payload: {
    socialOptions: PickerOption<string>[];
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

export interface ISetSocialAction {
  type: string;
  payload: {
    social?: Social;
  };
}
