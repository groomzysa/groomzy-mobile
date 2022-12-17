import React, { FC } from "react";
import {
  GButton,
  GErrorMessage,
  GRadioButton,
  GTextInput,
} from "../../../../components";
import { TextStyled, ContentContainer } from "./styles";
import { ISignInProps } from "./types";
import {
  KeyboardAvoidingViewContainer,
  ScrollViewContainer,
} from "../../../../utils/common/styles";
import { useSignInHandlers } from "./hooks";

export const SignIn: FC<ISignInProps> = ({ navigation }) => {
  /**
   *
   * Custom hooks
   *
   */

  const {
    forgotPasswordHandler,
    email,
    emailError,
    isProvider,
    password,
    passwordError,
    setEmail,
    setIsProvider,
    setPassword,
    showPassword,
    signInLoading,
    signInHasError,
    signInError,
    showPasswordHandler,
    signInHandler,
  } = useSignInHandlers(navigation);

  return (
    <KeyboardAvoidingViewContainer>
      <ScrollViewContainer
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <ContentContainer>
          {signInHasError && <GErrorMessage message={signInError} />}
          <GTextInput
            testID="email"
            label="Email"
            value={email}
            onTextChange={setEmail}
            errorMessage={emailError}
            keyboardType="email-address"
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
          <GRadioButton
            label="Service provider?"
            status={isProvider ? "checked" : "unchecked"}
            onPress={() => setIsProvider(!isProvider)}
          />
          <GButton
            label="Sing in"
            onPress={signInHandler}
            loading={signInLoading}
          />
          <TextStyled onPress={forgotPasswordHandler}>
            Forgot password?
          </TextStyled>
          <TextStyled
            onPress={() => {
              navigation.navigate("Sign up");
            }}
          >
            Not yet joined?
          </TextStyled>
        </ContentContainer>
      </ScrollViewContainer>
    </KeyboardAvoidingViewContainer>
  );
};
