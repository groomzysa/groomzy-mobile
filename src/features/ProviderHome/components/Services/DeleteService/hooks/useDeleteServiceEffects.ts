import { useEffect } from "react";
import { Alert } from "react-native";
import { DELETED_SERVICE_MESSAGE } from "../../../../../../utils/messages";
import { IuseDeleteServiceEffectParams } from "./types";

export const useDeleteServiceEffects = ({
  deleteService,
  hideDialog,
}: IuseDeleteServiceEffectParams) => {
  useEffect(() => {
    if (!deleteService) return;
    Alert.alert("Info", DELETED_SERVICE_MESSAGE, [{ text: "OK" }]);
    hideDialog();
  }, [deleteService]);
};
