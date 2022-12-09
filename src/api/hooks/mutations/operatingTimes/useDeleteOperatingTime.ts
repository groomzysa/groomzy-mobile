import { useDeleteOperatingTimeMutation } from "../../../graphql/mutations/operatingTime/deleteOperatingTime.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useDeleteOperatingTime = () => {
  const [deleteOperatingTimeTrigger, { data, isLoading, isError, error }] =
    useDeleteOperatingTimeMutation();

  return {
    deleteOperatingTimeTrigger,
    deleteOperatingTime: data?.deleteOperatingTime,
    deleteOperatingTimeLoading: isLoading,
    deleteOperatingTimeHasError: isError,
    deleteOperatingTimeError: getErrorMessage(error),
  };
};
