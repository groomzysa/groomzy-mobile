import { useEffect } from "react";
import {
  ADD_PROVIDER_TRADING_ADDRESS_MESSAGE,
  UPDATE_PROVIDER_TRADING_ADDRESS_MESSAGE,
} from "../../../../../../../utils/messages";
import { IuseTradingAddressEffectsParams } from "./types";

export const useTradingAddressEffects = ({
  setAreaCode,
  setCityName,
  setStreetName,
  setStreetNumber,
  setSuccessMessage,
  setTownName,
  successMessage,
  addTradingAddress,
  updateTradingAddress,
}: IuseTradingAddressEffectsParams) => {
  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  }, [successMessage]);

  useEffect(() => {
    if (!addTradingAddress) return;

    setSuccessMessage(ADD_PROVIDER_TRADING_ADDRESS_MESSAGE);

    // After added provider address successfully
    // Reset state
    setStreetNumber("");
    setStreetName("");
    setTownName("");
    setCityName("");
    setTownName("");
    setAreaCode("");
  }, [addTradingAddress]);

  useEffect(() => {
    if (!updateTradingAddress) return;

    setSuccessMessage(UPDATE_PROVIDER_TRADING_ADDRESS_MESSAGE);

    // After updated provider details successfully
    // Reset state
    setStreetNumber("");
    setStreetName("");
    setTownName("");
    setCityName("");
    setTownName("");
    setAreaCode("");
  }, [updateTradingAddress]);
};
