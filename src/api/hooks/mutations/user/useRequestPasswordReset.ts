import { useRequestPasswordResetMutation } from "../../../graphql/mutations/user/requestPasswordReset.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useRequestPasswordReset = () => {
  const [requestPasswordResetTrigger, { data, isLoading, isError, error }] =
    useRequestPasswordResetMutation();

  return {
    requestPasswordResetTrigger,
    requestPasswordReset: data?.requestPasswordReset,
    requestPasswordResetLoading: isLoading,
    requestPasswordResetHasError: isError,
    requestPasswordResetError: getErrorMessage(error),
  };
};
