import { useEffect } from "react";
import { IuseDeleteServiceEffectParams } from "./types";

export const useDeleteServiceEffects = ({
  deleteService,
  hideDialog,
}: IuseDeleteServiceEffectParams) => {
  useEffect(() => {
    if (!deleteService) return;

    hideDialog();
  }, [deleteService]);
};
