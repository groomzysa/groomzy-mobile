import React, { FC, useState } from "react";
import {
  GButton,
  GErrorMessage,
  GRadioButton,
  GSuccessMessage,
  GTextInput,
} from "../../components";
import { TextStyled, ContentContainer } from "./styles";
import { ISignUpProps } from "./types";
import { SIGN_UP_MESSAGE } from "../../utils/messages";
import {
  Flex1,
  FlexRowContainer,
  KeyboardAvoidingViewContainer,
  ScrollViewContainer,
} from "../../utils/common/styles";
import { useSignUpEffects, useSignUpHandlers } from "./hooks";

export const SignUp: FC<ISignUpProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isProvider, setIsProvider] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  /**
   *
   * Custom hooks
   *
   */

  const {
    addUser,
    addUserLoading,
    addUserHasError,
    addUserError,
    addUserhandler,
    showPasswordHandler,
  } = useSignUpHandlers();

  useSignUpEffects({
    navigation,
    setEmail,
    setFirstName,
    setIsProvider,
    setLastName,
    setPassword,
    addUser,
  });

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
                label="Last name"
                value={lastName}
                onTextChange={setLastName}
                errorMessage={lastNameError}
              />
            </Flex1>
          </FlexRowContainer>

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
            label="Sing up"
            onPress={() =>
              addUserhandler({
                email,
                emailError,
                firstName,
                firstNameError,
                isProvider,
                lastName,
                lastNameError,
                password,
                passwordError,
                setEmailError,
                setFirstNameError,
                setLastNameError,
                setPasswordError,
              })
            }
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
