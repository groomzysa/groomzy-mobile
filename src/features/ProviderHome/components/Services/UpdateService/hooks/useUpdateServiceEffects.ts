import { useEffect, useState } from "react";
import {
  CategoryType,
  DurationUnitType,
} from "../../../../../../api/graphql/api.schema";
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
  updateService,
}: IuseUpdateServiceEffectsParams) => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    if (!updateService) return;

    setSuccessMessage(UPDATE_SERVICE_MESSAGE);

    // After service updated successfully
    // Reset state
    setName(updateService.name!);
    setDescription(updateService.description!);
    setPrice(updateService.price!.toString());
    setDuration(updateService.duration!.toString());
    setDurationUnit(updateService.durationUnit as DurationUnitType);
    setCategory(updateService.category as CategoryType);

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

  return { successMessage };
};
