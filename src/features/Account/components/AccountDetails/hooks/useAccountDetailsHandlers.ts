import { validate } from "isemail";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateAccount } from "../../../../../api/hooks/mutations";
import { RootState } from "../../../../../store/store";
import { useAccountDetailsEffects } from "./useAccountDetailsEffects";

export const useAccountDetailsHandlers = () => {
  const {
    app: { user },
  } = useSelector<RootState, Pick<RootState, "app">>((state) => state);

  const [firstName, setFirstName] = useState<string>(user?.firstName || "");
  const [lastName, setLastName] = useState<string>(user?.lastName || "");
  const [email, setEmail] = useState<string>(user?.email || "");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    updateAccountTrigger,
    updateAccount,
    updateAccountLoading,
    updateAccountHasError,
    updateAccountError,
  } = useUpdateAccount();

  const { successMessage } = useAccountDetailsEffects({
    updateAccount,
    setEmail,
    setFirstName,
    setLastName,
    setPassword,
  });

  const updateAccounthandler = () => {
    if (!user) return;

    updateAccountTrigger({
      email,
      firstName,
      lastName,
      password,
    });
  };

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  return {
    email,
    firstName,
    lastName,
    password,
    updateAccountLoading,
    updateAccountHasError,
    updateAccountError,
    showPassword,
    updateAccounthandler,
    showPasswordHandler,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    successMessage,
  };
};
