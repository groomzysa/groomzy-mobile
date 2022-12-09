import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { IuseTradingTimesHandlersParams } from "./types";

export const useTradingTimesHandlers = ({
  setShowClosesTime,
  setShowOpensTime,
}: IuseTradingTimesHandlersParams) => {
  const opensTimePickerHandler = (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => {
    setShowOpensTime(false);
  };

  const closesTimePickerHandler = (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => {
    setShowClosesTime(false);
  };

  return {
    opensTimePickerHandler,
    closesTimePickerHandler,
  };
};
