import React, { FC } from "react";
import Dialog from "react-native-dialog";
import { GButton, GErrorMessage } from "../../../../../../../../components";
import { FlexRowEndContainer } from "../../../../../../../../utils/common/styles";
import { DELETE_OPERATING_TIME_MESSAGE } from "../../../../../../../../utils/messages";
import { Space } from "../../../../styles";
import { useDeleteTradingTimeHandlers } from "./hooks";
import { ActionButtonContainer, SubTitleText } from "./styles";
import { IDeleteTradingTimeProps } from "./types";

export const DeleteTradingTime: FC<IDeleteTradingTimeProps> = ({
  visible,
  hideDialog,
}) => {
  /**
   *
   * Custom hooks
   *
   */
  const {
    deleteOperatingTimeError,
    deleteOperatingTimeHandler,
    deleteOperatingTimeHasError,
    deleteOperatingTimeLoading,
  } = useDeleteTradingTimeHandlers(hideDialog);

  /**
   *
   * Templates
   *
   */

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <Dialog.Title>Delete Trading Time</Dialog.Title>
      {deleteOperatingTimeHasError && (
        <GErrorMessage message={deleteOperatingTimeError} />
      )}
      <Space />
      <SubTitleText>{DELETE_OPERATING_TIME_MESSAGE}</SubTitleText>

      <Space />
      <FlexRowEndContainer>
        <ActionButtonContainer>
          <GButton
            label="Delete"
            testID="deleteTradingTimeButton"
            onPress={() => deleteOperatingTimeHandler()}
            loading={deleteOperatingTimeLoading}
          />
        </ActionButtonContainer>
        <ActionButtonContainer>
          <GButton
            label="Cancel"
            onPress={hideDialog}
            testID="cancelDeleteTradingTimeButton"
            variant="cancel"
          />
        </ActionButtonContainer>
      </FlexRowEndContainer>
    </Dialog.Container>
  );
};
