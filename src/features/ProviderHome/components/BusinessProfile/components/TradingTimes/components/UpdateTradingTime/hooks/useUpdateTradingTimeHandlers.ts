import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useUpdateOperatingTime } from "../../../../../../../../../api/hooks/mutations";
import {
  IupdateOperatingTimeHandlerParams,
  IuseUpdateTradingTimeHandlersParams,
} from "./types";

export const useUpdateTradingTimeHandlers = ({
  setShowCloses,
  setShowOpens,
  setCloses,
  setOpens,
}: IuseUpdateTradingTimeHandlersParams) => {
  const {
    updateOperatingTime,
    updateOperatingTimeError,
    updateOperatingTimeHasError,
    updateOperatingTimeLoading,
    updateOperatingTimeTrigger,
  } = useUpdateOperatingTime();

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

  const updateOperatingTimeHandler = ({
    operatingTimeId,
    closes,
    day,
    opens,
  }: IupdateOperatingTimeHandlerParams) => {
    updateOperatingTimeTrigger({
      operatingTimeId,
      day,
      opens,
      closes,
    });
  };

  return {
    updateOperatingTime,
    updateOperatingTimeError,
    updateOperatingTimeHasError,
    updateOperatingTimeLoading,
    opensPickerHandler,
    closesPickerHandler,
    updateOperatingTimeHandler,
  };
};
