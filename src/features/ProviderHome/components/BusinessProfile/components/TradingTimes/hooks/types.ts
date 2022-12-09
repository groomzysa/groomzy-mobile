import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Dispatch, SetStateAction } from "react";
import { OperatingTime } from "../../../../../../../api/graphql/api.schema";

export interface IuseTradingTimesEffectsParams {
  operatingTimes?: OperatingTime[];
  showOpensTime: boolean;
  showClosesTime: boolean;
  opensTimePickerHandler: (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => void;
  closesTimePickerHandler: (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => void;
}

export interface IuseTradingTimesHandlersParams {
  setShowOpensTime: Dispatch<SetStateAction<boolean>>;
  setShowClosesTime: Dispatch<SetStateAction<boolean>>;
}
