import { useAddTradingAddressMutation } from "../../../graphql/mutations/provider/addTradingAddress.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useAddTradingAddress = () => {
  const [addTradingAddressTrigger, { data, isLoading, isError, error }] =
    useAddTradingAddressMutation();

  return {
    addTradingAddressTrigger,
    addTradingAddress: data?.addTradingAddress,
    addTradingAddressLoading: isLoading,
    addTradingAddressHasError: isError,
    addTradingAddressError: getErrorMessage(error),
  };
};
