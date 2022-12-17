import { useResetPasswordMutation } from "../../../graphql/mutations/user/resetPassword.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useResetPassword = () => {
  const [resetPasswordTrigger, { data, isLoading, isError, error }] =
    useResetPasswordMutation();

  return {
    resetPasswordTrigger,
    resetPassword: data?.resetPassword,
    resetPasswordLoading: isLoading,
    resetPasswordHasError: isError,
    resetPasswordError: getErrorMessage(error),
  };
};
