import React, { FC, useState, useEffect } from "react";
import { validate } from "isemail";
import { UserRole } from "../../api/graphql/api.schema";
import { storeToken } from "../../api/helpers";
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
import { setToken } from "../../store/slices/appSlice";
import {
  KeyboardAvoidingViewContainer,
  ScrollViewContainer,
} from "../../utils/common/styles";

export const SignIn: FC<SignInProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isProvider, setIsProvider] = useState<boolean>(false);
  const dispatch = useDispatch();

  /**
   *
   * Custom hooks
   *
   */
  const { signInTrigger, token, signInLoading, signInHasError, signInError } =
    useSignIn();

  /**
   *
   * Effects
   *
   */
  useEffect(() => {
    if (!token) return;

    // After user signed in successfully
    // Reset state and redirect to home screen
    setEmail("");
    setPassword("");
    setIsProvider(false);

    dispatch(setToken({ token: token }));

    async function storeNewToken(input: string) {
      await storeToken(input);
    }
    storeNewToken(token);

    navigation.reset({ routes: [{ name: "Home" }] });
  }, [token]);

  /**
   *
   * Handlers
   *
   */
  const signInHandler = () => {
    const emailAbort = !email || !validate(email);
    const passwordAbort = !password || password.length < 5;
    const abortSignIn = emailAbort || passwordAbort;

    if (!validate(email)) {
      setEmailError("Email is invalid.");
    } else if (emailError) {
      setEmailError("");
    }
    if (password.length < 5) {
      setPasswordError("Password is too short!");
    } else if (passwordError) {
      setPasswordError("");
    }

    if (abortSignIn) return;

    signInTrigger({
      email,
      password,
      role: isProvider ? UserRole.Provider : UserRole.Client,
    });
  };

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
          />
          <GTextInput
            testID="password"
            label="password"
            value={password}
            onTextChange={setPassword}
            errorMessage={passwordError}
            secureTextEntry
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
