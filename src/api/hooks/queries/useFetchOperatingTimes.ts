import { useOperatingTimesQuery } from "../../graphql/quries/operatingTime/operatingTimes.enhanced";
import { getErrorMessage } from "../../helpers";

export const useFetchOperatingTimes = () => {
  const { data, isLoading, isError, error } = useOperatingTimesQuery();

  return {
    operatingTimes: data?.operatingTimes,
    operatingTimesLoading: isLoading,
    operatingTimesHasError: isError,
    operatingTimesError: getErrorMessage(error),
  };
};
