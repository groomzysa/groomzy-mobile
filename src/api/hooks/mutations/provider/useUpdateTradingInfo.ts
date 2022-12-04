import { useUpdateTradingInfoMutation } from "../../../graphql/mutations/provider/updateTradingInfo.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useUpdateTradingInfo = () => {
  const [updateTradingInfoTrigger, { data, isLoading, isError, error }] =
    useUpdateTradingInfoMutation();

  return {
    updateTradingInfoTrigger,
    updateTradingInfo: data?.updateTradingInfo,
    updateTradingInfoLoading: isLoading,
    updateTradingInfoHasError: isError,
    updateTradingInfoError: getErrorMessage(error),
  };
};
