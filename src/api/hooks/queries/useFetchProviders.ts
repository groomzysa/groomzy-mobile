import { useProvidersQuery } from "../../graphql/quries/provider/providers.enhanced";
import { getErrorMessage } from "../../helpers";

export const useFetchProviders = () => {
  const { data, isLoading, isError, error } = useProvidersQuery();

  return {
    providers: data?.providers,
    providersLoading: isLoading,
    providersHasError: isError,
    providersError: getErrorMessage(error),
  };
};
