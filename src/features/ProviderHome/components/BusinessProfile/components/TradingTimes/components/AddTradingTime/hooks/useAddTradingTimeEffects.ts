import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useEffect } from "react";
import { ADD_OPERATING_TIME_MESSAGE } from "../../../../../../../../../utils/messages";
import { IuseAddTradingTimeEffectsparams } from "./types";

export const useAddTradingTimeEffects = ({
  closesPickerHandler,
  opensPickerHandler,
  showCloses,
  showOpens,
  addOperatingTime,
  setSuccessMessage,
  successMessage,
  setCloses,
  setDay,
  setOpens,
  hideDialog,
}: IuseAddTradingTimeEffectsparams) => {
  useEffect(() => {
    if (!addOperatingTime) return;

    setSuccessMessage(ADD_OPERATING_TIME_MESSAGE);

    // After user added operating time successfully
    // Reset state
    setDay(undefined);
    setCloses("");
    setOpens("");
  }, [addOperatingTime]);

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
