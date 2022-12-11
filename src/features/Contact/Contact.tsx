import React, { FC } from "react";
import {
  GButton,
  GErrorMessage,
  GSuccessMessage,
  GTextInput,
} from "../../components";
import {
  KeyboardAvoidingViewContainer,
  ScrollViewContainer,
} from "../../utils/common/styles";
import { useContactMailHandlers } from "./hooks";
import { ContentContainer } from "./styles";

export const Contact: FC = () => {
  /**
   *
   * Custom hooks
   *
   */
  const {
    contactMailError,
    contactMailHandler,
    contactMailHasError,
    contactMailLoading,
    email,
    emailError,
    firstName,
    firstNameError,
    lastName,
    lastNameError,
    message,
    messageError,
    setEmail,
    setFirstName,
    setLastName,
    setMessage,
    setSubject,
    subject,
    subjectError,
    successMessage,
  } = useContactMailHandlers();

  return (
    <KeyboardAvoidingViewContainer>
      <ScrollViewContainer
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <ContentContainer>
          {successMessage && <GSuccessMessage message={successMessage} />}
          {contactMailHasError && <GErrorMessage message={contactMailError} />}

          <GTextInput
            testID="firstName"
            label="First name"
            value={firstName}
            onTextChange={setFirstName}
            errorMessage={firstNameError}
          />

          <GTextInput
            testID="lastName"
            label="Last name"
            value={lastName}
            onTextChange={setLastName}
            errorMessage={lastNameError}
          />

          <GTextInput
            testID="email"
            label="Email"
            value={email}
            onTextChange={setEmail}
            errorMessage={emailError}
            keyboardType="email-address"
          />

          <GTextInput
            testID="subject"
            label="Subject"
            value={subject}
            onTextChange={setSubject}
            errorMessage={subjectError}
          />

          <GTextInput
            testID="message"
            label="Message"
            value={message}
            onTextChange={setMessage}
            errorMessage={messageError}
            multiline
            numberOfLines={8}
          />

          <GButton
            label="Send"
            onPress={contactMailHandler}
            loading={contactMailLoading}
          />
        </ContentContainer>
      </ScrollViewContainer>
    </KeyboardAvoidingViewContainer>
  );
};
