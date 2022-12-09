import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Dispatch, SetStateAction } from "react";
import {
  DayType,
  OperatingTime,
} from "../../../../../../../../../api/graphql/api.schema";

export interface IuseAddTradingTimeEffectsparams {
  addOperatingTime?: OperatingTime;
  showOpens: boolean;
  showCloses: boolean;
  successMessage: string;
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

export interface IuseAddTradingTimeHandlersParams {
  setOpens: Dispatch<SetStateAction<string>>;
  setCloses: Dispatch<SetStateAction<string>>;
  setShowOpens: Dispatch<SetStateAction<boolean>>;
  setShowCloses: Dispatch<SetStateAction<boolean>>;
}

export interface IaddOperatingTimeHandlerParams {
  day?: DayType;
  dayError: string;
  opens: string;
  opensError: string;
  closes: string;
  closesError: string;
  setDayError: Dispatch<SetStateAction<string>>;
  setOpensError: Dispatch<SetStateAction<string>>;
  setClosesError: Dispatch<SetStateAction<string>>;
}
