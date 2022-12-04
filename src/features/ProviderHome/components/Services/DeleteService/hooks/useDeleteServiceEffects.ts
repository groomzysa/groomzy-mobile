import { useEffect } from "react";
import { DELETE_SERVICE_MESSAGE } from "../../../../../../utils/messages";
import { IuseDeleteServiceEffectParams } from "./types";

export const useDeleteServiceEffects = ({
  deleteService,
  successMessage,
  setSuccessMessage,
  hideDialog,
}: IuseDeleteServiceEffectParams) => {
  useEffect(() => {
    if (!deleteService) return;

    setSuccessMessage(DELETE_SERVICE_MESSAGE);
  }, [deleteService]);

  useEffect(() => {
    if (!successMessage) return;

    setTimeout(() => {
      setSuccessMessage("");
      hideDialog();
    }, 5000);
  }, [successMessage]);
};
