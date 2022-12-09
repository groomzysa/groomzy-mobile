import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Dispatch, SetStateAction } from "react";
import {
  DayType,
  OperatingTime,
} from "../../../../../../../../../api/graphql/api.schema";

export interface IuseUpdateTradingTimeEffectsparams {
  updateOperatingTime?: OperatingTime;
  successMessage: string;
  showOpens: boolean;
  showCloses: boolean;
  opensPickerHandler: (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => void;
  closesPickerHandler: (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => void;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  setDay: Dispatch<SetStateAction<DayType | undefined>>;
  setOpens: Dispatch<SetStateAction<string>>;
  setCloses: Dispatch<SetStateAction<string>>;
  hideDialog: () => void;
}

export interface IuseUpdateTradingTimeHandlersParams {
  setOpens: Dispatch<SetStateAction<string>>;
  setCloses: Dispatch<SetStateAction<string>>;
  setShowOpens: Dispatch<SetStateAction<boolean>>;
  setShowCloses: Dispatch<SetStateAction<boolean>>;
}

export interface IupdateOperatingTimeHandlerParams {
  operatingTimeId: number;
  day?: DayType;
  opens?: string;
  closes?: string;
}
