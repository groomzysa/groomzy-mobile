import { useContactMailMutation } from "../../graphql/mutations/mail/contactMail.enhanced";
import { getErrorMessage } from "../../helpers";

export const useContactMail = () => {
  const [contactMailTrigger, { data, isLoading, isError, error }] =
    useContactMailMutation();

  return {
    contactMailTrigger,
    contactMail: data?.contactMail,
    contactMailLoading: isLoading,
    contactMailHasError: isError,
    contactMailError: getErrorMessage(error),
  };
};
