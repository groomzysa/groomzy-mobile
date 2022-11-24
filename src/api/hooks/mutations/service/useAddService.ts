import { useAddServiceMutation } from "../../../graphql/mutations/service/addService.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useAddService = () => {
  const [addServiceTrigger, { data, isLoading, isError, error }] =
    useAddServiceMutation();

  return {
    addServiceTrigger,
    addService: data?.addService,
    addServiceLoading: isLoading,
    addServiceHasError: isError,
    addServiceError: getErrorMessage(error),
  };
};
