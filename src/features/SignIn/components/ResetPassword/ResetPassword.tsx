import React, { FC } from "react";
import {
  GButton,
  GErrorMessage,
  GSuccessMessage,
  GTextInput,
} from "../../../../components";
import { ContentContainer } from "./styles";
import { IResetPasswordProps } from "./types";
import {
  KeyboardAvoidingViewContainer,
  ScrollViewContainer,
} from "../../../../utils/common/styles";
import { useResetPasswordHandlers } from "./hooks";

export const ResetPassword: FC<IResetPasswordProps> = ({ navigation }) => {
  /**
   *
   * Custom hooks
   *
   */

  const {
    password,
    passwordError,
    passwordResetOTP,
    setPassword,
    setPasswordResetOTP,
    resetPasswordError,
    resetPasswordHandler,
    resetPasswordHasError,
    resetPasswordLoading,
    successMessage,
    showPassword,
    showPasswordHandler,
  } = useResetPasswordHandlers(navigation);

  return (
    <KeyboardAvoidingViewContainer>
      <ScrollViewContainer
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <ContentContainer>
          {successMessage && <GSuccessMessage message={successMessage} />}
          {resetPasswordHasError && (
            <GErrorMessage message={resetPasswordError} />
          )}
          <GTextInput
            testID="opt"
            label="OTP"
            value={passwordResetOTP}
            onTextChange={setPasswordResetOTP}
          />

          <GTextInput
            testID="password"
            label="Password"
            value={password}
            onTextChange={setPassword}
            errorMessage={passwordError}
            sufixIcon={showPassword ? "eye-outline" : "eye-off-outline"}
            sufixIconOnPress={showPasswordHandler}
            secureTextEntry={!showPassword}
          />

          <GButton
            label="Reset password"
            onPress={resetPasswordHandler}
            loading={resetPasswordLoading}
          />
        </ContentContainer>
      </ScrollViewContainer>
    </KeyboardAvoidingViewContainer>
  );
};
