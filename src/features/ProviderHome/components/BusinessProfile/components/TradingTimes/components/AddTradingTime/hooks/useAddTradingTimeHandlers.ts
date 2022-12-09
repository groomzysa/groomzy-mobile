import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useAddOperatingTime } from "../../../../../../../../../api/hooks/mutations";
import {
  IaddOperatingTimeHandlerParams,
  IuseAddTradingTimeHandlersParams,
} from "./types";

export const useAddTradingTimeHandlers = ({
  setShowCloses,
  setShowOpens,
  setCloses,
  setOpens,
}: IuseAddTradingTimeHandlersParams) => {
  const {
    addOperatingTime,
    addOperatingTimeError,
    addOperatingTimeHasError,
    addOperatingTimeLoading,
    addOperatingTimeTrigger,
  } = useAddOperatingTime();

  const opensPickerHandler = (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => {
    setOpens(`${date?.getHours()}:${date?.getMinutes()} hrz`);
    setShowOpens(false);
  };

  const closesPickerHandler = (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => {
    setCloses(`${date?.getHours()}:${date?.getMinutes()} hrz`);
    setShowCloses(false);
  };

  const addOperatingTimeHandler = ({
    day,
    opens,
    closes,
    closesError,
    dayError,
    opensError,
    setClosesError,
    setDayError,
    setOpensError,
  }: IaddOperatingTimeHandlerParams) => {
    const arbortAddOperatingTime = !day || !opens || !closes;

    if (!day) {
      setDayError("Day is required!");
    } else if (dayError) {
      setDayError("");
    }
    if (!opens) {
      setOpensError("Opening time is required!");
    } else if (opensError) {
      setOpensError("");
    }
    if (!closes) {
      setClosesError("Closing time is required!");
    } else if (closesError) {
      setClosesError("");
    }

    if (arbortAddOperatingTime) return;

    addOperatingTimeTrigger({
      day,
      opens,
      closes,
    });
  };

  return {
    addOperatingTime,
    addOperatingTimeError,
    addOperatingTimeHasError,
    addOperatingTimeLoading,
    opensPickerHandler,
    closesPickerHandler,
    addOperatingTimeHandler,
  };
};
