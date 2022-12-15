import { useEffect, useState } from "react";
import {
  ADD_USER_ACCOUNT_ADDRESS_MESSAGE,
  UPDATE_USER_ACCOUNT_ADDRESS_MESSAGE,
} from "../../../../../utils/messages";
import { IuseAccountgAddressEffects } from "./types";

export const useAccountAddressEffects = ({
  setAreaCode,
  setCityName,
  setStreetName,
  setStreetNumber,
  setTownName,
  setProvinceName,
  addAccountAddress,
  updateAccountAddress,
}: IuseAccountgAddressEffects) => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }, [successMessage]);

  useEffect(() => {
    if (!addAccountAddress) return;

    setSuccessMessage(ADD_USER_ACCOUNT_ADDRESS_MESSAGE);

    // After added provider address successfully
    // Reset state
    setStreetNumber(addAccountAddress.streetNumber!);
    setStreetName(addAccountAddress.streetName!);
    setTownName(addAccountAddress.town!);
    setCityName(addAccountAddress.city!);
    setProvinceName(addAccountAddress.province!);
    setAreaCode(addAccountAddress.areaCode!);
  }, [addAccountAddress]);

  useEffect(() => {
    if (!updateAccountAddress) return;

    setSuccessMessage(UPDATE_USER_ACCOUNT_ADDRESS_MESSAGE);

    // After updated provider details successfully
    // Reset state
    setStreetNumber(updateAccountAddress.streetNumber!);
    setStreetName(updateAccountAddress.streetName!);
    setTownName(updateAccountAddress.town!);
    setCityName(updateAccountAddress.city!);
    setProvinceName(updateAccountAddress.province!);
    setAreaCode(updateAccountAddress.areaCode!);
  }, [updateAccountAddress]);

  return {
    successMessage,
    setSuccessMessage,
  };
};
