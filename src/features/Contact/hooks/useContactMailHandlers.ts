import { validate } from "isemail";
import { useState } from "react";
import { Linking } from "react-native";
import { useContactMail } from "../../../api/hooks/mutations";
import { useContactMailEffects } from "./useContactMailEffects";

export const useContactMailHandlers = () => {
  /**
   *
   * State
   *
   */
  const [firstName, setFirstName] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [subjectError, setSubjectError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  /**
   *
   * Custom hooks
   *
   */

  const {
    contactMail,
    contactMailError,
    contactMailHasError,
    contactMailLoading,
    contactMailTrigger,
  } = useContactMail();

  const { successMessage } = useContactMailEffects({
    setEmail,
    setFirstName,
    setLastName,
    setMessage,
    setSubject,
    contactMail,
  });

  /**
   *
   * Handlers
   *
   */

  const visitInstagram = () => {
    Linking.openURL("https://instagram.com/groomzy_");
  };

  const visitFacebook = () => {
    //TODO: UPDATE with facebook page link
    Linking.openURL("https://instagram.com/groomzy_");
  };

  const visitTiktok = () => {
    //TODO: UPDATE with tiktok account link
    Linking.openURL("https://instagram.com/groomzy_");
  };

  const visitWhatsapp = () => {
    Linking.openURL("https://api.whatsapp.com/send?phone=+27671350513");
  };

  const contactMailHandler = () => {
    const abortContactMail =
      !firstName ||
      !lastName ||
      !email ||
      !validate(email) ||
      !subject ||
      !message;

    if (!firstName) {
      setFirstNameError("First name is required.");
    } else if (firstNameError) {
      setFirstNameError("");
    }

    if (!lastName) {
      setLastNameError("Last name is invalid.");
    } else if (lastNameError) {
      setLastNameError("");
    }

    if (!email || !validate(email)) {
      setEmailError("Email is invalid.");
    } else if (emailError) {
      setEmailError("");
    }

    if (!subject) {
      setSubjectError("First name is invalid.");
    } else if (subjectError) {
      setSubjectError("");
    }

    if (!message) {
      setMessageError("Message is required.");
    } else if (messageError) {
      setMessageError("");
    }

    if (abortContactMail) return;

    contactMailTrigger({
      email,
      firstName,
      lastName,
      message,
      subject,
    });
  };

  return {
    firstName,
    setFirstName,
    firstNameError,
    lastName,
    setLastName,
    lastNameError,
    email,
    setEmail,
    emailError,
    subject,
    setSubject,
    subjectError,
    message,
    setMessage,
    messageError,
    contactMailError,
    contactMailHasError,
    contactMailLoading,
    contactMailHandler,
    successMessage,
    visitInstagram,
    visitFacebook,
    visitWhatsapp,
    visitTiktok,
  };
};
