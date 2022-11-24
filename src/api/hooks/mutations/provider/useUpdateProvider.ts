import { useUpdateProviderMutation } from "../../../graphql/mutations/provider/updateProvider.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useUpdateProvider = () => {
  const [updateProviderTrigger, { data, isLoading, isError, error }] =
    useUpdateProviderMutation();

  return {
    updateProviderTrigger,
    updateProvider: data?.updateProvider,
    updateProviderLoading: isLoading,
    updateProviderHasError: isError,
    updateProviderError: getErrorMessage(error),
  };
};
