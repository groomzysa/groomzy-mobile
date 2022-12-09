import { useDeleteOperatingTime } from "../../../../../../../../../api/hooks/mutations";
import { IdeleteOperatingTimeHandlersParams } from "./types";

export const useDeleteTradingTimeHandlers = () => {
  const {
    deleteOperatingTime,
    deleteOperatingTimeError,
    deleteOperatingTimeHasError,
    deleteOperatingTimeLoading,
    deleteOperatingTimeTrigger,
  } = useDeleteOperatingTime();

  const deleteOperatingTimeHandler = ({
    operatingTimeId,
  }: IdeleteOperatingTimeHandlersParams) => {
    deleteOperatingTimeTrigger({
      operatingTimeId,
    });
  };

  return {
    deleteOperatingTime,
    deleteOperatingTimeError,
    deleteOperatingTimeHasError,
    deleteOperatingTimeLoading,
    deleteOperatingTimeHandler,
  };
};
