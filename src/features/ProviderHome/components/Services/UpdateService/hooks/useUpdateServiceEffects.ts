import { useEffect } from "react";
import { UPDATE_SERVICE_MESSAGE } from "../../../../../../utils/messages";
import { IuseUpdateServiceEffectsParams } from "./types";

export const useUpdateServiceEffects = ({
  hideDialog,
  setCategory,
  setDescription,
  setDuration,
  setDurationUnit,
  setName,
  setPrice,
  setSuccessMessage,
  successMessage,
  updateService,
}: IuseUpdateServiceEffectsParams) => {
  useEffect(() => {
    if (!updateService) return;

    setSuccessMessage(UPDATE_SERVICE_MESSAGE);

    // After service updated successfully
    // Reset state
    setName("");
    setDescription("");
    setPrice("");
    setDuration("");
    setDurationUnit(undefined);
    setCategory(undefined);

    setTimeout(() => {
      hideDialog();
    }, 5000);
  }, [updateService]);

  useEffect(() => {
    if (!successMessage) return;

    // After success message read
    // Reset its state and close dialog
    setTimeout(() => {
      setSuccessMessage("");
      hideDialog();
    }, 3000);
  }, [successMessage]);
};
