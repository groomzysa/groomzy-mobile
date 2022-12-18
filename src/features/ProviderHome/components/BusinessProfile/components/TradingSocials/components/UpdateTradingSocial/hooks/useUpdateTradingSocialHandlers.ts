import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateSocial } from "../../../../../../../../../api/hooks/mutations";
import { RootState } from "../../../../../../../../../store/store";
import { useUpdateTradingSocialEffects } from "./useUpdateTradingSocialEffects";

export const useUpdateTradingSocialHandlers = (hideDialog: () => void) => {
  /**
   *
   * States
   *
   */
  const {
    homeProvider: { socialOptions, social },
  } = useSelector<RootState, Pick<RootState, "homeProvider">>((state) => state);

  const [name, setName] = useState<string | undefined>(social?.name as string);
  const [username, setUsername] = useState<string>(social?.username || "");

  /**
   *
   * Custom hooks
   *
   */
  const {
    updateSocial,
    updateSocialError,
    updateSocialHasError,
    updateSocialLoading,
    updateSocialTrigger,
  } = useUpdateSocial();

  const { successMessage } = useUpdateTradingSocialEffects({
    hideDialog,
    setName,
    setUsername,
    updateSocial,
  });

  /**
   *
   * Handlers
   *
   */
  const updateSocialHandler = () => {
    if (!social) return;

    updateSocialTrigger({
      socialId: social.id,
      name,
      username,
    });
  };

  return {
    social,
    socialOptions,
    name,
    username,
    successMessage,
    setName,
    setUsername,
    updateSocialError,
    updateSocialHasError,
    updateSocialLoading,
    updateSocialHandler,
  };
};
