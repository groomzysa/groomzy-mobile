import { useEffect } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

import { IuseTradingTimesEffectsParams } from "./types";
import { useDispatch } from "react-redux";
import { setDayOptions } from "../../../../../../../store/slices/providerHomeSlice/providerHomeSlice";
import { DAYS } from "../constants";

export const useTradingTimesEffects = ({
  closesTimePickerHandler,
  opensTimePickerHandler,
  showClosesTime,
  showOpensTime,
  operatingTimes,
}: IuseTradingTimesEffectsParams) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getDayOptions = () => {
      if (!operatingTimes) {
        return DAYS;
      }

      return DAYS.filter(
        (day) =>
          !operatingTimes.find(
            (operatingTime) => operatingTime.day === day.value
          )
      );
    };

    dispatch(setDayOptions({ dayOptions: getDayOptions() }));
  }, [operatingTimes]);

  useEffect(() => {
    if (showOpensTime) {
      DateTimePickerAndroid.open({
        mode: "time",
        is24Hour: true,
        value: new Date(),
        onChange: opensTimePickerHandler,
      });
    } else {
      DateTimePickerAndroid.dismiss("time");
    }
  }, [showOpensTime]);

  useEffect(() => {
    if (showClosesTime) {
      DateTimePickerAndroid.open({
        mode: "time",
        is24Hour: true,
        value: new Date(),
        onChange: closesTimePickerHandler,
      });
    } else {
      DateTimePickerAndroid.dismiss("time");
    }
  }, [showClosesTime]);
};
