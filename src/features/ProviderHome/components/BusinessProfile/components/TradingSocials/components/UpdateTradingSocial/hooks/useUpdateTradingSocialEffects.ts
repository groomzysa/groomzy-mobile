import { useEffect, useState } from "react";
import { UPDATE_SOCIAL_MESSAGE } from "../../../../../../../../../utils/messages";
import { IuseUpdateTradingSocialEffectsparams } from "./types";

export const useUpdateTradingSocialEffects = ({
  setName,
  setUsername,
  updateSocial,
  hideDialog,
}: IuseUpdateTradingSocialEffectsparams) => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    if (!updateSocial) return;

    setSuccessMessage(UPDATE_SOCIAL_MESSAGE);

    // After user updated operating time successfully
    // Reset state
    setName(updateSocial.name!);
    setUsername(updateSocial.username!);
  }, [updateSocial]);

  useEffect(() => {
    if (!successMessage) return;

    // After success message read
    // Reset its state and close dialog
    setTimeout(() => {
      setSuccessMessage("");
      hideDialog();
    }, 3000);
  }, [successMessage]);

  return {
    successMessage,
  };
};
