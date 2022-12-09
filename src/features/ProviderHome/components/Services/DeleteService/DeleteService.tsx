import React, { FC, useState } from "react";
import Dialog from "react-native-dialog";
import {
  GButton,
  GErrorMessage,
  GSuccessMessage,
} from "../../../../../components";
import { FlexRowEndContainer } from "../../../../../utils/common/styles";
import { DELETE_SERVICE_MESSAGE } from "../../../../../utils/messages";
import { useDeleteServiceEffects, useDeleteServiceHandlers } from "./hooks";
import { ActionButtonContainer, SubTitleText } from "./styles";
import { IDeleteServiceProps } from "./types";

export const DeleteService: FC<IDeleteServiceProps> = ({
  service,
  visible,
  hideDialog,
}) => {
  const { id: serviceId } = service;

  /**
   *
   * Custom hooks
   *
   */

  const {
    deleteServiceHandler,
    deleteService,
    deleteServiceLoading,
    deleteServiceHasError,
    deleteServiceError,
  } = useDeleteServiceHandlers();

  useDeleteServiceEffects({
    deleteService,
    hideDialog,
  });

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <Dialog.Title>Delete service</Dialog.Title>
      {deleteServiceHasError && <GErrorMessage message={deleteServiceError} />}

      <SubTitleText>{DELETE_SERVICE_MESSAGE}</SubTitleText>

      <FlexRowEndContainer>
        <ActionButtonContainer>
          <GButton
            label="Delete"
            onPress={() =>
              deleteServiceHandler({
                serviceId,
              })
            }
            loading={deleteServiceLoading}
            testID="deleteServiceButton"
          />
        </ActionButtonContainer>
        <ActionButtonContainer>
          <GButton
            label="Cancel"
            onPress={hideDialog}
            testID="cancelAddServiceButton"
            variant="cancel"
          />
        </ActionButtonContainer>
      </FlexRowEndContainer>
    </Dialog.Container>
  );
};
