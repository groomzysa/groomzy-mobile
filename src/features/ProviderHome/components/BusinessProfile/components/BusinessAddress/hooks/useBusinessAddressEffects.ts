import { useEffect } from "react";
import {
  ADD_PROVIDER_ADDRESS_MESSAGE,
  UPDATE_PROVIDER_ADDRESS_MESSAGE,
} from "../../../../../../../utils/messages";
import { IuseBusinessAddressEffectsParams } from "./types";

export const useBusinessAddressEffects = ({
  setAreaCode,
  setCityName,
  setStreetName,
  setStreetNumber,
  setSuccessMessage,
  setTownName,
  successMessage,
  addProviderAddress,
  updateProviderAddress,
}: IuseBusinessAddressEffectsParams) => {
  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  }, [successMessage]);

  useEffect(() => {
    if (!addProviderAddress) return;

    setSuccessMessage(ADD_PROVIDER_ADDRESS_MESSAGE);

    // After added provider address successfully
    // Reset state
    setStreetNumber("");
    setStreetName("");
    setTownName("");
    setCityName("");
    setTownName("");
    setAreaCode("");
  }, [addProviderAddress]);

  useEffect(() => {
    if (!updateProviderAddress) return;

    setSuccessMessage(UPDATE_PROVIDER_ADDRESS_MESSAGE);

    // After updated provider details successfully
    // Reset state
    setStreetNumber("");
    setStreetName("");
    setTownName("");
    setCityName("");
    setTownName("");
    setAreaCode("");
  }, [updateProviderAddress]);
};
