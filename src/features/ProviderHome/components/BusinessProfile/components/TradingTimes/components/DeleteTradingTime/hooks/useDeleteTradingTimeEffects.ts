import { useEffect } from "react";
import { IuseDeleteTradingTimeEffectsparams } from "./types";

export const useDeleteTradingTimeEffects = ({
  deleteOperatingTime,
  hideDialog,
}: IuseDeleteTradingTimeEffectsparams) => {
  useEffect(() => {
    if (!deleteOperatingTime) return;

    hideDialog();
  }, [deleteOperatingTime]);
};
