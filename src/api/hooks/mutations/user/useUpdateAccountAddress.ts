import { useUpdateAccountAddressMutation } from "../../../graphql/mutations/user/updateAccountAddress.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useUpdateAccountAddress = () => {
  const [updateAccountAddressTrigger, { data, isLoading, isError, error }] =
    useUpdateAccountAddressMutation();

  return {
    updateAccountAddressTrigger,
    updateAccountAddress: data?.updateAccountAddress,
    updateAccountAddressLoading: isLoading,
    updateAccountAddressHasError: isError,
    updateAccountAddressError: getErrorMessage(error),
  };
};
