import { useAddTradingInfoMutation } from "../../../graphql/mutations/provider/addTradingInfo.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useAddTradingInfo = () => {
  const [addTradingInfoTrigger, { data, isLoading, isError, error }] =
    useAddTradingInfoMutation();

  return {
    addTradingInfoTrigger,
    addTradingInfo: data?.addTradingInfo,
    addTradingInfoLoading: isLoading,
    addTradingInfoHasError: isError,
    addTradingInfoError: getErrorMessage(error),
  };
};
