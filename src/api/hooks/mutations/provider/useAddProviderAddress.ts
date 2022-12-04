import { useAddProviderAddressMutation } from "../../../graphql/mutations/provider/addProviderAddress.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useAddProviderAddress = () => {
  const [addProviderAddressTrigger, { data, isLoading, isError, error }] =
    useAddProviderAddressMutation();

  return {
    addProviderAddressTrigger,
    addProviderAddress: data?.addProviderAddress,
    addProviderAddressLoading: isLoading,
    addProviderAddressHasError: isError,
    addProviderAddressError: getErrorMessage(error),
  };
};
