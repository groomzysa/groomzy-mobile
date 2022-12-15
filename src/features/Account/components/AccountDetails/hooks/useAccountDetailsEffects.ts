import { useEffect, useState } from "react";
import { ACCOUNT_UPDATED_MESSAGE } from "../../../../../utils/messages";
import { IuseAccountDetailsEffects } from "./types";

export const useAccountDetailsEffects = ({
  updateAccount,
  setEmail,
  setFirstName,
  setLastName,
  setPassword,
}: IuseAccountDetailsEffects) => {
  const [successMessage, setSuccessMessage] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }, [successMessage]);

  useEffect(() => {
    if (!updateAccount) return;

    setSuccessMessage(ACCOUNT_UPDATED_MESSAGE);

    // After user updated account successfully
    // Reset state
    setFirstName(updateAccount.firstName as string);
    setLastName(updateAccount.lastName as string);
    setEmail(updateAccount.email as string);
    setPassword("");
  }, [updateAccount]);

  return {
    successMessage,
  };
};
