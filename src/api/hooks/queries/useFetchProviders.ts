import { useProvidersQuery } from "../../graphql/quries/providers.generated";

export const useFetchProviders = () => {
  const { data, isLoading, isError, error } = useProvidersQuery();

  return {
    providers: data?.providers,
    providersLoading: isLoading,
    providersHasError: isError,
    providersError: error,
  };
};
