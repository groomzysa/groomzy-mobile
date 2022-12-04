import { useUpdateTradingAddressMutation } from "../../../graphql/mutations/provider/updateTradingAddress.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useUpdateTradingAddress = () => {
  const [updateTradingAddressTrigger, { data, isLoading, isError, error }] =
    useUpdateTradingAddressMutation();

  return {
    updateTradingAddressTrigger,
    updateTradingAddress: data?.updateTradingAddress,
    updateTradingAddressLoading: isLoading,
    updateTradingAddressHasError: isError,
    updateTradingAddressError: getErrorMessage(error),
  };
};
