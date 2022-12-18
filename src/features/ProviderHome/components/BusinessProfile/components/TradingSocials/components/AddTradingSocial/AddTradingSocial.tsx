import React, { FC } from "react";
import Dialog from "react-native-dialog";
import {
  GBSelect,
  GButton,
  GErrorMessage,
  GSuccessMessage,
  GTextInput,
} from "../../../../../../../../components";
import { FlexRowEndContainer } from "../../../../../../../../utils/common/styles";
import { Space } from "../../../../styles";
import { SOCIALS } from "../../constants";
import { useAddTradingSocialHandlers } from "./hooks";
import { ActionButtonContainer, ErrorText } from "./styles";
import { IAddTradingSocialProps } from "./types";

export const AddTradingSocial: FC<IAddTradingSocialProps> = ({
  visible,
  hideDialog,
}) => {
  /**
   *
   * Custom hooks
   *
   */
  const {
    name,
    nameError,
    setName,
    socialOptions,
    username,
    usernameError,
    setUsername,
    successMessage,
    addSocialError,
    addSocialHasError,
    addSocialLoading,
    addSocialHandler,
  } = useAddTradingSocialHandlers(hideDialog);

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <Dialog.Title>Add Trading Social</Dialog.Title>
      {successMessage && <GSuccessMessage message={successMessage} />}
      {addSocialHasError && <GErrorMessage message={addSocialError} />}
      <GBSelect
        items={SOCIALS}
        enabledItems={socialOptions}
        label="Select social"
        onValueChange={(itemValue) => setName(itemValue as string)}
        selectedValue={name}
      />
      {nameError && <ErrorText>{nameError}</ErrorText>}
      <Space />
      <GTextInput
        testID="socialUsername"
        label="Social username"
        value={username || ""}
        onTextChange={setUsername}
        errorMessage={usernameError}
      />
      <Space />
      <FlexRowEndContainer>
        <ActionButtonContainer>
          <GButton
            label="Add"
            testID="addTradingSocialButton"
            onPress={() => {
              addSocialHandler();
            }}
            loading={addSocialLoading}
          />
        </ActionButtonContainer>
        <ActionButtonContainer>
          <GButton
            label="Cancel"
            onPress={hideDialog}
            testID="cancelAddTradingSocialButton"
            variant="cancel"
          />
        </ActionButtonContainer>
      </FlexRowEndContainer>
    </Dialog.Container>
  );
};
