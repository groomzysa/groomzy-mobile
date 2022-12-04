import { useUpdateProviderAddressMutation } from "../../../graphql/mutations/provider/updateProviderAddress.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useUpdateProviderAddress = () => {
  const [updateProviderAddressTrigger, { data, isLoading, isError, error }] =
    useUpdateProviderAddressMutation();

  return {
    updateProviderAddressTrigger,
    updateProviderAddress: data?.updateProviderAddress,
    updateProviderAddressLoading: isLoading,
    updateProviderAddressHasError: isError,
    updateProviderAddressError: getErrorMessage(error),
  };
};
