import React, { FC } from "react";
import Dialog from "react-native-dialog";
import { GButton, GErrorMessage } from "../../../../../../../../components";
import { FlexRowEndContainer } from "../../../../../../../../utils/common/styles";
import { DELETE_OPERATING_TIME_MESSAGE } from "../../../../../../../../utils/messages";
import { Space } from "../../../../styles";
import { useDeleteTradingSocialHandlers } from "./hooks";
import { ActionButtonContainer, SubTitleText } from "./styles";
import { IDeleteTradingSocialProps } from "./types";

export const DeleteTradingSocial: FC<IDeleteTradingSocialProps> = ({
  visible,
  hideDialog,
}) => {
  /**
   *
   * Custom hooks
   *
   */
  const {
    deleteSocialError,
    deleteSocialHandler,
    deleteSocialHasError,
    deleteSocialLoading,
  } = useDeleteTradingSocialHandlers(hideDialog);

  /**
   *
   * Templates
   *
   */

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <Dialog.Title>Delete Trading Social</Dialog.Title>
      {deleteSocialHasError && <GErrorMessage message={deleteSocialError} />}
      <Space />
      <SubTitleText>{DELETE_OPERATING_TIME_MESSAGE}</SubTitleText>

      <Space />
      <FlexRowEndContainer>
        <ActionButtonContainer>
          <GButton
            label="Delete"
            testID="deleteTradingSocialButton"
            onPress={() => deleteSocialHandler()}
            loading={deleteSocialLoading}
          />
        </ActionButtonContainer>
        <ActionButtonContainer>
          <GButton
            label="Cancel"
            onPress={hideDialog}
            testID="cancelDeleteTradingSocialButton"
            variant="cancel"
          />
        </ActionButtonContainer>
      </FlexRowEndContainer>
    </Dialog.Container>
  );
};
