import { useEffect } from "react";
import {
  ADD_PROVIDER_BUSINESS_DETAILS_MESSAGE,
  UPDATE_PROVIDER_BUSINESS_DETAILS_MESSAGE,
} from "../../../../../../../utils/messages";
import { IuseBusinessDetailsEffectsParams } from "./types";

export const useBusinessDetailsEffects = ({
  addProvider,
  setPhoneNumber,
  setSuccessMessage,
  setTradingName,
  successMessage,
  updateProvider,
}: IuseBusinessDetailsEffectsParams) => {
  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  }, [successMessage]);

  useEffect(() => {
    if (!addProvider) return;

    setSuccessMessage(ADD_PROVIDER_BUSINESS_DETAILS_MESSAGE);

    // After added provider details successfully
    // Reset state
    setTradingName(addProvider.tradingName!);
    setPhoneNumber(addProvider.phone!);
  }, [addProvider]);

  useEffect(() => {
    if (!updateProvider) return;

    setSuccessMessage(UPDATE_PROVIDER_BUSINESS_DETAILS_MESSAGE);

    // After  added provider details successfully
    // Reset state
    setTradingName(updateProvider.tradingName!);
    setPhoneNumber(updateProvider.phone!);
  }, [updateProvider]);
};
