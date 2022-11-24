import { useUpdateServiceMutation } from "../../../graphql/mutations/service/updateService.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useUpdateService = () => {
  const [updateServiceTrigger, { data, isLoading, isError, error }] =
    useUpdateServiceMutation();

  return {
    updateServiceTrigger,
    updateService: data?.updateService,
    updateServiceLoading: isLoading,
    updateServiceHasError: isError,
    updateServiceError: getErrorMessage(error),
  };
};
