import { useEffect } from "react";
import { Alert } from "react-native";
import { DELETED_SOCIAL_MESSAGE } from "../../../../../../../../../utils/messages";
import { IuseDeleteTradingSocialEffectsparams } from "./types";

export const useDeleteTradingSocialEffects = ({
  deleteSocial,
  hideDialog,
}: IuseDeleteTradingSocialEffectsparams) => {
  useEffect(() => {
    if (!deleteSocial) return;

    Alert.alert("Info", DELETED_SOCIAL_MESSAGE, [{ text: "OK" }]);
    hideDialog();
  }, [deleteSocial]);
};
