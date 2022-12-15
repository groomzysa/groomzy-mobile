import { useEffect, useState } from "react";
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
  setProvinceName,
  setTownName,
  addTradingAddress,
  updateTradingAddress,
}: IuseTradingAddressEffectsParams) => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }, [successMessage]);

  useEffect(() => {
    if (!addTradingAddress) return;

    setSuccessMessage(ADD_PROVIDER_TRADING_ADDRESS_MESSAGE);

    // After added provider address successfully
    // Reset state
    setStreetNumber(addTradingAddress.streetNumber!);
    setStreetName(addTradingAddress.streetName!);
    setTownName(addTradingAddress.town!);
    setCityName(addTradingAddress.city!);
    setProvinceName(addTradingAddress.province!);
    setAreaCode(addTradingAddress.areaCode!);
  }, [addTradingAddress]);

  useEffect(() => {
    if (!updateTradingAddress) return;

    setSuccessMessage(UPDATE_PROVIDER_TRADING_ADDRESS_MESSAGE);

    // After updated provider details successfully
    // Reset state
    setStreetNumber(updateTradingAddress.streetNumber!);
    setStreetName(updateTradingAddress.streetName!);
    setTownName(updateTradingAddress.town!);
    setCityName(updateTradingAddress.city!);
    setProvinceName(updateTradingAddress.province!);
    setAreaCode(updateTradingAddress.areaCode!);
  }, [updateTradingAddress]);

  return { successMessage };
};
