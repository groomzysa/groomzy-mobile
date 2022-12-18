import { useEffect, useState } from "react";
import { ADD_SOCIAL_MESSAGE } from "../../../../../../../../../utils/messages";
import { IuseAddTradingSocialEffectsparams } from "./types";

export const useAddTradingSocialEffects = ({
  setName,
  setUsername,
  addSocial,
  hideDialog,
}: IuseAddTradingSocialEffectsparams) => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    if (!addSocial) return;

    setSuccessMessage(ADD_SOCIAL_MESSAGE);

    // After user added operating time successfully
    // Reset state
    setName(undefined);
    setUsername("");
  }, [addSocial]);

  useEffect(() => {
    if (!successMessage) return;

    // After success message read
    // Reset its state and close dialog
    setTimeout(() => {
      setSuccessMessage("");
      hideDialog();
    }, 3000);
  }, [successMessage]);

  return { successMessage };
};
