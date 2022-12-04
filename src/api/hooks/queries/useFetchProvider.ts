import { useProviderQuery } from "../../graphql/quries/provider/provider.enhanced";
import { getErrorMessage } from "../../helpers";

export const useFetchProvider = () => {
  const { data, isLoading, isError, error } = useProviderQuery();

  return {
    provider: data?.provider,
    providerLoading: isLoading,
    providerHasError: isError,
    providerError: getErrorMessage(error),
  };
};
