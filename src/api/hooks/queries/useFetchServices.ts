import { useServicesQuery } from "../../graphql/quries/service/services.enhanced";
import { getErrorMessage } from "../../helpers";

export const useFetchServices = () => {
  const { data, isLoading, isError, error } = useServicesQuery();

  return {
    services: data?.services,
    servicesLoading: isLoading,
    servicesHasError: isError,
    servicesError: getErrorMessage(error),
  };
};
