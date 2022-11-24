import {
  useLazyUserQuery,
  useUserQuery,
} from "../../graphql/quries/user/user.enhanced";
import { getErrorMessage } from "../../helpers";

export const useFetchUser = () => {
  const [userFetchTrigger, { data, isLoading, isError, error }] =
    useLazyUserQuery();

  return {
    userFetchTrigger,
    user: data?.user,
    userLoading: isLoading,
    userHasError: isError,
    userError: getErrorMessage(error),
  };
};
