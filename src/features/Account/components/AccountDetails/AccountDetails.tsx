import React, { FC } from "react";
import { View } from "react-native";
import {
  GButton,
  GErrorMessage,
  GSuccessMessage,
  GTextInput,
} from "../../../../components";
import { Flex1, FlexRowContainer } from "../../../../utils/common/styles";
import { useAccountDetailsHandlers } from "./hooks";

export const AccountDetails: FC = () => {
  const {
    email,
    firstName,
    lastName,
    password,
    showPassword,
    setEmail,
    setFirstName,
    setLastName,
    setPassword,
    showPasswordHandler,
    successMessage,
    updateAccountError,
    updateAccountHasError,
    updateAccountLoading,
    updateAccounthandler,
  } = useAccountDetailsHandlers();

  return (
    <View>
      {successMessage && <GSuccessMessage message={successMessage} />}
      {updateAccountHasError && <GErrorMessage message={updateAccountError} />}
      <FlexRowContainer>
        <Flex1>
          <GTextInput
            testID="firstName"
            label="First name"
            value={firstName}
            onTextChange={setFirstName}
          />
        </Flex1>
        <Flex1>
          <GTextInput
            testID="lastName"
            label="Last name"
            value={lastName}
            onTextChange={setLastName}
          />
        </Flex1>
      </FlexRowContainer>

      {/* <GTextInput
            testID="email"
            label="Email"
            value={email}
            onTextChange={setEmail}
            errorMessage={emailError}
            keyboardType="email-address"
          /> */}
      <GTextInput
        testID="password"
        label="Password"
        value={password}
        onTextChange={setPassword}
        sufixIcon={showPassword ? "eye-outline" : "eye-off-outline"}
        sufixIconOnPress={() => showPasswordHandler()}
        secureTextEntry={!showPassword}
      />
      <GButton
        label="Update"
        onPress={updateAccounthandler}
        loading={updateAccountLoading}
      />
    </View>
  );
};
