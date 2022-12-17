import React, { FC } from "react";
import {
  GButton,
  GErrorMessage,
  GRadioButton,
  GSuccessMessage,
  GTextInput,
} from "../../../../components";
import { ContentContainer } from "./styles";
import { IRequestPasswordResetProps } from "./types";
import {
  KeyboardAvoidingViewContainer,
  ScrollViewContainer,
} from "../../../../utils/common/styles";
import { useRequestPasswordResetHandlers } from "./hooks";

export const RequestPasswordReset: FC<IRequestPasswordResetProps> = ({
  navigation,
}) => {
  /**
   *
   * Custom hooks
   *
   */

  const {
    email,
    emailError,
    isProvider,
    requestPasswordResetError,
    requestPasswordResetHandler,
    requestPasswordResetHasError,
    requestPasswordResetLoading,
    setEmail,
    setIsProvider,
    successMessage,
  } = useRequestPasswordResetHandlers(navigation);

  return (
    <KeyboardAvoidingViewContainer>
      <ScrollViewContainer
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <ContentContainer>
          {successMessage && <GSuccessMessage message={successMessage} />}
          {requestPasswordResetHasError && (
            <GErrorMessage message={requestPasswordResetError} />
          )}
          <GTextInput
            testID="email"
            label="Email"
            value={email}
            onTextChange={setEmail}
            errorMessage={emailError}
            keyboardType="email-address"
          />
          <GRadioButton
            label="Service provider?"
            status={isProvider ? "checked" : "unchecked"}
            onPress={() => setIsProvider(!isProvider)}
          />
          <GButton
            label="Request password reset"
            onPress={requestPasswordResetHandler}
            loading={requestPasswordResetLoading}
          />
        </ContentContainer>
      </ScrollViewContainer>
    </KeyboardAvoidingViewContainer>
  );
};
