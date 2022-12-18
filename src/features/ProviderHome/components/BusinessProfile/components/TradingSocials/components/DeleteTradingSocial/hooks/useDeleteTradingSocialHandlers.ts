import { useSelector } from "react-redux";
import { useDeleteSocial } from "../../../../../../../../../api/hooks/mutations";
import { RootState } from "../../../../../../../../../store/store";
import { useDeleteTradingSocialEffects } from "./useDeleteTradingSocialEffects";

export const useDeleteTradingSocialHandlers = (hideDialog: () => void) => {
  /**
   *
   * States
   *
   */
  const {
    homeProvider: { social },
  } = useSelector<RootState, Pick<RootState, "homeProvider">>((state) => state);

  /**
   *
   * Custom hooks
   *
   */

  const {
    deleteSocial,
    deleteSocialError,
    deleteSocialHasError,
    deleteSocialLoading,
    deleteSocialTrigger,
  } = useDeleteSocial();

  useDeleteTradingSocialEffects({
    hideDialog,
    deleteSocial,
  });

  /**
   *
   * Handlers
   *
   */

  const deleteSocialHandler = () => {
    if (!social) return;

    deleteSocialTrigger({
      socialId: social.id,
    });
  };

  return {
    deleteSocialError,
    deleteSocialHasError,
    deleteSocialLoading,
    deleteSocialHandler,
  };
};
