import { useEffect } from "react";
import { Alert } from "react-native";
import { DELETED_OPERATING_TIME_MESSAGE } from "../../../../../../../../../utils/messages";
import { IuseDeleteTradingTimeEffectsparams } from "./types";

export const useDeleteTradingTimeEffects = ({
  deleteOperatingTime,
  hideDialog,
}: IuseDeleteTradingTimeEffectsparams) => {
  useEffect(() => {
    if (!deleteOperatingTime) return;

    Alert.alert("Info", DELETED_OPERATING_TIME_MESSAGE, [{ text: "OK" }]);
    hideDialog();
  }, [deleteOperatingTime]);
};
