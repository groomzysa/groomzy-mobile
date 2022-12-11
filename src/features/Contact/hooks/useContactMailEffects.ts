import { useEffect, useState } from "react";
import { CONTACT_MAIL_SENT_MESSAGE } from "../../../utils/messages";
import { IuseContactMailEffects } from "./types";

export const useContactMailEffects = ({
  contactMail,
  setEmail,
  setFirstName,
  setLastName,
  setMessage,
  setSubject,
}: IuseContactMailEffects) => {
  const [successMessage, setSuccessMessage] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  }, [successMessage]);

  useEffect(() => {
    if (!contactMail) return;

    setSuccessMessage(CONTACT_MAIL_SENT_MESSAGE);

    // After contact mail sent successfully
    // Reset state
    setEmail("");
    setFirstName("");
    setLastName("");
    setMessage("");
    setSubject("");
  }, [contactMail]);

  return {
    successMessage,
  };
};
