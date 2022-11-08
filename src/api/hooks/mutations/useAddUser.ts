import { useAddUserMutation } from "../../graphql/mutations/addUser.generated";

export const useAddUser = () => {
  const [addUserTrigger, { data, isLoading, isError, error }] =
    useAddUserMutation();

  return {
    addUserTrigger,
    addUser: data?.addUser,
    addUserLoading: isLoading,
    addUserHasError: isError,
    addUserError: error,
  };
};
