import { useAddProviderMutation } from "../../../graphql/mutations/provider/addProvider.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useAddProvider = () => {
  const [addProviderTrigger, { data, isLoading, isError, error }] =
    useAddProviderMutation();

  return {
    addProviderTrigger,
    addProvider: data?.addProvider,
    addProviderLoading: isLoading,
    addProviderHasError: isError,
    addProviderError: getErrorMessage(error),
  };
};
