import { useEffect, useState } from "react";
import { ADD_SERVICE_MESSAGE } from "../../../../../../utils/messages";
import { IuseAddServiceEffectsParams } from "./types";

export const useAddServiceEffects = ({
  addService,
  setCategory,
  setDescription,
  setDuration,
  setDurationUnit,
  setName,
  setPrice,
  hideDialog,
}: IuseAddServiceEffectsParams) => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    if (!addService) return;

    setSuccessMessage(ADD_SERVICE_MESSAGE);

    // After user added service successfully
    // Reset state
    setName("");
    setDescription("");
    setPrice("");
    setDuration("");
    setDurationUnit(undefined);
    setCategory(undefined);
  }, [addService]);

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
