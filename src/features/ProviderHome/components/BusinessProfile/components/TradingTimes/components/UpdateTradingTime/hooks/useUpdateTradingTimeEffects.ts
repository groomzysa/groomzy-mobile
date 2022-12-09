import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useEffect } from "react";
import { DayType } from "../../../../../../../../../api/graphql/api.schema";
import { UPDATE_OPERATING_TIME_MESSAGE } from "../../../../../../../../../utils/messages";
import { IuseUpdateTradingTimeEffectsparams } from "./types";

export const useUpdateTradingTimeEffects = ({
  closesPickerHandler,
  opensPickerHandler,
  showCloses,
  showOpens,
  hideDialog,
  setCloses,
  setDay,
  setOpens,
  setSuccessMessage,
  successMessage,
  updateOperatingTime,
}: IuseUpdateTradingTimeEffectsparams) => {
  useEffect(() => {
    if (!updateOperatingTime) return;

    setSuccessMessage(UPDATE_OPERATING_TIME_MESSAGE);

    // After user updated operating time successfully
    // Reset state
    setDay(updateOperatingTime.day as DayType);
    setCloses(updateOperatingTime.closes as string);
    setOpens(updateOperatingTime.opens as string);
  }, [updateOperatingTime]);

  useEffect(() => {
    if (!successMessage) return;

    // After success message read
    // Reset its state and close dialog
    setTimeout(() => {
      setSuccessMessage("");
      hideDialog();
    }, 3000);
  }, [successMessage]);

  useEffect(() => {
    if (showOpens) {
      DateTimePickerAndroid.open({
        mode: "time",
        is24Hour: true,
        value: new Date(),
        onChange: opensPickerHandler,
      });
    } else {
      DateTimePickerAndroid.dismiss("time");
    }
  }, [showOpens]);

  useEffect(() => {
    if (showCloses) {
      DateTimePickerAndroid.open({
        mode: "time",
        is24Hour: true,
        value: new Date(),
        onChange: closesPickerHandler,
      });
    } else {
      DateTimePickerAndroid.dismiss("time");
    }
  }, [showCloses]);
};
