import { useAddOperatingTimeMutation } from "../../../graphql/mutations/operatingTime/addOperatingTime.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useAddOperatingTime = () => {
  const [addOperatingTimeTrigger, { data, isLoading, isError, error }] =
    useAddOperatingTimeMutation();

  return {
    addOperatingTimeTrigger,
    addOperatingTime: data?.addOperatingTime,
    addOperatingTimeLoading: isLoading,
    addOperatingTimeHasError: isError,
    addOperatingTimeError: getErrorMessage(error),
  };
};
