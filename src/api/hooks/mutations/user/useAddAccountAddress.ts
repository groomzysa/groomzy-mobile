import { useAddAccountAddressMutation } from "../../../graphql/mutations/user/addAccountAddress.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useAddAccountAddress = () => {
  const [addAccountAddressTrigger, { data, isLoading, isError, error }] =
    useAddAccountAddressMutation();

  return {
    addAccountAddressTrigger,
    addAccountAddress: data?.addAccountAddress,
    addAccountAddressLoading: isLoading,
    addAccountAddressHasError: isError,
    addAccountAddressError: getErrorMessage(error),
  };
};
