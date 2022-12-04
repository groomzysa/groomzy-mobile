import React, { FC, useState } from "react";
import Dialog from "react-native-dialog";
import { useDeleteService } from "../../../../../api/hooks/mutations";
import {
  GButton,
  GErrorMessage,
  GSuccessMessage,
} from "../../../../../components";
import { FlexRowEndContainer } from "../../../../../utils/common/styles";
import { useDeleteServiceEffects, useDeleteServiceHandlers } from "./hooks";
import { SubTitleText } from "./styles";
import { IDeleteServiceProps } from "./types";

export const DeleteService: FC<IDeleteServiceProps> = ({
  service,
  visible,
  hideDialog,
}) => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const { id: serviceId } = service;

  /**
   *
   * Custom hooks
   *
   */
  const {
    deleteServiceTrigger,
    deleteService,
    deleteServiceLoading,
    deleteServiceHasError,
    deleteServiceError,
  } = useDeleteService();

  const { deleteServiceHandler } = useDeleteServiceHandlers();

  useDeleteServiceEffects({
    deleteService,
    hideDialog,
    setSuccessMessage,
    successMessage,
  });

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <Dialog.Title>Delete service</Dialog.Title>
      {successMessage && <GSuccessMessage message={successMessage} />}
      {deleteServiceHasError && <GErrorMessage message={deleteServiceError} />}

      <SubTitleText>Are you sure want to delete this service?</SubTitleText>

      <FlexRowEndContainer>
        <GButton
          label="Delete"
          onPress={() =>
            deleteServiceHandler({
              deleteServiceTrigger,
              serviceId,
            })
          }
          loading={deleteServiceLoading}
          testID="deleteServiceButton"
        />
        <GButton
          label="Cancel"
          onPress={hideDialog}
          testID="cancelAddServiceButton"
          variant="cancel"
        />
      </FlexRowEndContainer>
    </Dialog.Container>
  );
};
