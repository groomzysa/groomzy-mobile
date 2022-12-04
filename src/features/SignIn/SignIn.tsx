import React, { FC, useState, useEffect } from "react";
import { useSignIn } from "../../api/hooks/mutations";
import {
  GButton,
  GErrorMessage,
  GRadioButton,
  GTextInput,
} from "../../components";
import { TextStyled, ContentContainer } from "./styles";
import { SignInProps } from "./types";
import { useDispatch } from "react-redux";
import {
  KeyboardAvoidingViewContainer,
  ScrollViewContainer,
} from "../../utils/common/styles";
import { useSignInEffects, useSignInHandlers } from "./hooks";

export const SignIn: FC<SignInProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isProvider, setIsProvider] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useDispatch();

  /**
   *
   * Custom hooks
   *
   */
  const { signInTrigger, token, signInLoading, signInHasError, signInError } =
    useSignIn();

  const { showPasswordHandler, signInHandler } = useSignInHandlers();

  useSignInEffects({
    navigation,
    setEmail,
    setIsProvider,
    setPassword,
    token,
  });

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
            label="email"
            value={email}
            onTextChange={setEmail}
            errorMessage={emailError}
            keyboardType="email-address"
          />
          <GTextInput
            testID="password"
            label="password"
            value={password}
            onTextChange={setPassword}
            errorMessage={passwordError}
            sufixIcon={showPassword ? "eye-outline" : "eye-off-outline"}
            sufixIconOnPress={() =>
              showPasswordHandler({ setShowPassword, showPassword })
            }
            secureTextEntry={!showPassword}
          />
          <GRadioButton
            label="Service provider?"
            status={isProvider ? "checked" : "unchecked"}
            onPress={() => setIsProvider(!isProvider)}
          />
          <GButton
            label="Sing in"
            onPress={() =>
              signInHandler({
                email,
                emailError,
                isProvider,
                password,
                passwordError,
                setEmailError,
                setPasswordError,
                signInTrigger,
              })
            }
            loading={signInLoading}
          />
          <TextStyled>Forgot password?</TextStyled>
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
