import { useState } from "react";
import { useSelector } from "react-redux";
import { useAddSocial } from "../../../../../../../../../api/hooks/mutations";
import { RootState } from "../../../../../../../../../store/store";
import { useAddTradingSocialEffects } from "./useAddTradingSocialEffects";

export const useAddTradingSocialHandlers = (hideDialog: () => void) => {
  /**
   *
   * State
   *
   */
  const {
    homeProvider: { socialOptions },
  } = useSelector<RootState, Pick<RootState, "homeProvider">>((state) => state);

  const [name, setName] = useState<string>();
  const [nameError, setNameError] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");

  /**
   *
   * Custom hooks
   *
   */

  const {
    addSocial,
    addSocialError,
    addSocialHasError,
    addSocialLoading,
    addSocialTrigger,
  } = useAddSocial();

  const { successMessage } = useAddTradingSocialEffects({
    hideDialog,
    setName,
    setUsername,
    addSocial,
  });

  const addSocialHandler = () => {
    const arbortAddSocial = !name || !username;

    if (!name) {
      setNameError("Social name is required!");
    } else if (nameError) {
      setNameError("");
    }
    if (!username) {
      setUsernameError("Social username is required!");
    } else if (usernameError) {
      setUsernameError("");
    }

    if (arbortAddSocial) return;

    addSocialTrigger({
      name,
      username,
    });
  };

  return {
    socialOptions,
    name,
    nameError,
    username,
    usernameError,
    setName,
    setUsername,
    addSocialError,
    addSocialHasError,
    addSocialLoading,
    successMessage,
    addSocialHandler,
  };
};
