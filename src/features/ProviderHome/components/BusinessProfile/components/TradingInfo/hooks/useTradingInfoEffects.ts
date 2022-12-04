import { useEffect } from "react";
import {
  ADD_PROVIDER_TRADING_INFO_MESSAGE,
  UPDATE_PROVIDER_TRADING_INFO_MESSAGE,
} from "../../../../../../../utils/messages";
import { IuseTradingInfoEffectsParams } from "./types";

export const useTradingInfoEffects = ({
  addTradingInfo,
  setPhoneNumber,
  setSuccessMessage,
  setTradingName,
  successMessage,
  updateTradingInfo,
}: IuseTradingInfoEffectsParams) => {
  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  }, [successMessage]);

  useEffect(() => {
    if (!addTradingInfo) return;

    setSuccessMessage(ADD_PROVIDER_TRADING_INFO_MESSAGE);

    // After added provider details successfully
    // Reset state
    setTradingName(addTradingInfo.tradingName!);
    setPhoneNumber(addTradingInfo.phone!);
  }, [addTradingInfo]);

  useEffect(() => {
    if (!updateTradingInfo) return;

    setSuccessMessage(UPDATE_PROVIDER_TRADING_INFO_MESSAGE);

    // After  added provider details successfully
    // Reset state
    setTradingName(updateTradingInfo.tradingName!);
    setPhoneNumber(updateTradingInfo.phone!);
  }, [updateTradingInfo]);
};
