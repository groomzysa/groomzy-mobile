import { useSelector } from "react-redux";
import { useDeleteOperatingTime } from "../../../../../../../../../api/hooks/mutations";
import { RootState } from "../../../../../../../../../store/store";
import { useDeleteTradingTimeEffects } from "./useDeleteTradingTimeEffects";

export const useDeleteTradingTimeHandlers = (hideDialog: () => void) => {
  /**
   *
   * States
   *
   */
  const {
    homeProvider: { operatingTime },
  } = useSelector<RootState, Pick<RootState, "homeProvider">>((state) => state);

  /**
   *
   * Custom hooks
   *
   */

  const {
    deleteOperatingTime,
    deleteOperatingTimeError,
    deleteOperatingTimeHasError,
    deleteOperatingTimeLoading,
    deleteOperatingTimeTrigger,
  } = useDeleteOperatingTime();

  useDeleteTradingTimeEffects({
    hideDialog,
    deleteOperatingTime,
  });

  /**
   *
   * Handlers
   *
   */

  const deleteOperatingTimeHandler = () => {
    if (!operatingTime) return;

    deleteOperatingTimeTrigger({
      operatingTimeId: operatingTime.id,
    });
  };

  return {
    deleteOperatingTimeError,
    deleteOperatingTimeHasError,
    deleteOperatingTimeLoading,
    deleteOperatingTimeHandler,
  };
};
