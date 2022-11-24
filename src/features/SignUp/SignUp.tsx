import React, { FC, useEffect, useState } from "react";
import { validate } from "isemail";
import { UserRole } from "../../api/graphql/api.schema";
import { useAddUser } from "../../api/hooks/mutations";
import {
  GButton,
  GErrorMessage,
  GRadioButton,
  GSuccessMessage,
  GTextInput,
} from "../../components";
import { TextStyled, ContentContainer } from "./styles";
import { SignUpProps } from "./types";
import { SIGN_UP_MESSAGE } from "../../utils/messages";
import {
  Flex1,
  FlexRowContainer,
  KeyboardAvoidingViewContainer,
  ScrollViewContainer,
} from "../../utils/common/styles";

export const SignUp: FC<SignUpProps> = ({ navigation, route }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isProvider, setIsProvider] = useState<boolean>(false);

  /**
   *
   * Custom hooks
   *
   */
  const {
    addUserTrigger,
    addUser,
    addUserLoading,
    addUserHasError,
    addUserError,
  } = useAddUser();

  /**
   *
   * Effects
   *
   */
  useEffect(() => {
    if (!addUser) return;

    // After user signed up successfully
    // Reset state and redirect to sign in screen
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setIsProvider(false);

    setTimeout(() => {
      navigation.reset({ routes: [{ name: "Sign in" }] });
    }, 5000);
  }, [addUser]);

  /**
   *
   * Handlers
   *
   */
  const addUserhandler = () => {
    const emailAbort = !email || !validate(email);
    const passwordAbort = !password || password.length < 5;
    const abortSignUp = !firstName || !lastName || emailAbort || passwordAbort;
    if (!firstName) {
      setFirstNameError("First name is required!");
    } else if (firstNameError) {
      setFirstNameError("");
    }
    if (!lastName) {
      setLastNameError("Last name is required!");
    } else if (lastNameError) {
      setLastNameError("");
    }
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

    if (abortSignUp) return;

    addUserTrigger({
      email,
      firstName,
      lastName,
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
          {addUser && <GSuccessMessage message={SIGN_UP_MESSAGE} />}
          {addUserHasError && <GErrorMessage message={addUserError} />}
          <FlexRowContainer>
            <Flex1>
              <GTextInput
                testID="firstName"
                label="First name"
                value={firstName}
                onTextChange={setFirstName}
                errorMessage={firstNameError}
              />
            </Flex1>
            <Flex1>
              <GTextInput
                testID="lastName"
                label="last name"
                value={lastName}
                onTextChange={setLastName}
                errorMessage={lastNameError}
              />
            </Flex1>
          </FlexRowContainer>

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
            secureTextEntry
          />
          <GRadioButton
            label="Service provider?"
            status={isProvider ? "checked" : "unchecked"}
            onPress={() => setIsProvider(!isProvider)}
          />
          <GButton
            label="Sing up"
            onPress={addUserhandler}
            loading={addUserLoading}
          />
          <TextStyled
            onPress={() => {
              navigation.navigate("Sign in");
            }}
          >
            Already signed up?
          </TextStyled>
        </ContentContainer>
      </ScrollViewContainer>
    </KeyboardAvoidingViewContainer>
  );
};
