import { useUpdateOperatingTimeMutation } from "../../../graphql/mutations/operatingTime/updateOperatingTime.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useUpdateOperatingTime = () => {
  const [updateOperatingTimeTrigger, { data, isLoading, isError, error }] =
    useUpdateOperatingTimeMutation();

  return {
    updateOperatingTimeTrigger,
    updateOperatingTime: data?.updateOperatingTime,
    updateOperatingTimeLoading: isLoading,
    updateOperatingTimeHasError: isError,
    updateOperatingTimeError: getErrorMessage(error),
  };
};
