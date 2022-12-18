import React, { FC } from "react";
import Dialog from "react-native-dialog";
import {
  GBSelect,
  GButton,
  GSuccessMessage,
  GTextInput,
} from "../../../../../../../../components";
import { FlexRowEndContainer } from "../../../../../../../../utils/common/styles";
import { Space } from "../../../../styles";
import { SOCIALS } from "../../constants";
import { useUpdateTradingSocialHandlers } from "./hooks";
import { ActionButtonContainer } from "./styles";
import { IUpdateTradingSocialProps } from "./types";

export const UpdateTradingSocial: FC<IUpdateTradingSocialProps> = ({
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
    setName,
    setUsername,
    social,
    socialOptions,
    successMessage,
    updateSocialError,
    updateSocialHandler,
    updateSocialHasError,
    updateSocialLoading,
    username,
  } = useUpdateTradingSocialHandlers(hideDialog);

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <Dialog.Title>Update Trading Social</Dialog.Title>
      {successMessage && <GSuccessMessage message={successMessage} />}
      {updateSocialHasError && <GSuccessMessage message={updateSocialError} />}

      <GBSelect
        items={SOCIALS}
        enabledItems={socialOptions}
        label="Select social"
        onValueChange={(itemValue) => setName(itemValue as string)}
        selectedValue={name || social?.name}
      />

      <GTextInput
        testID="socialUsername"
        label="Social username"
        value={username || social?.username || ""}
        onTextChange={setUsername}
      />

      <Space />
      <FlexRowEndContainer>
        <ActionButtonContainer>
          <GButton
            label="Update"
            testID="updateTradingSocialButton"
            onPress={updateSocialHandler}
            loading={updateSocialLoading}
          />
        </ActionButtonContainer>
        <ActionButtonContainer>
          <GButton
            label="Cancel"
            onPress={hideDialog}
            testID="cancelUpdateTradingSocialButton"
            variant="cancel"
          />
        </ActionButtonContainer>
      </FlexRowEndContainer>
    </Dialog.Container>
  );
};
