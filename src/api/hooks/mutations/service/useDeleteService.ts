import { useDeleteServiceMutation } from "../../../graphql/mutations/service/deleteService.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useDeleteService = () => {
  const [deleteServiceTrigger, { data, isLoading, isError, error }] =
    useDeleteServiceMutation();

  return {
    deleteServiceTrigger,
    deleteService: data?.deleteService,
    deleteServiceLoading: isLoading,
    deleteServiceHasError: isError,
    deleteServiceError: getErrorMessage(error),
  };
};
