import { useUpdateAccountMutation } from "../../../graphql/mutations/user/updateAccount.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useUpdateAccount = () => {
  const [updateAccountTrigger, { data, isLoading, isError, error }] =
    useUpdateAccountMutation();

  return {
    updateAccountTrigger,
    updateAccount: data?.updateAccount,
    updateAccountLoading: isLoading,
    updateAccountHasError: isError,
    updateAccountError: getErrorMessage(error),
  };
};
