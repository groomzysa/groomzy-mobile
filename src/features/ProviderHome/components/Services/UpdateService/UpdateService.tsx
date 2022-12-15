import React, { FC } from "react";
import Dialog from "react-native-dialog";
import {
  CategoryType,
  DurationUnitType,
} from "../../../../../api/graphql/api.schema";
import {
  GButton,
  GErrorMessage,
  GRadioButton,
  GSuccessMessage,
  GTextInput,
} from "../../../../../components";
import {
  Flex1,
  FlexColumContainer,
  FlexRowContainer,
  FlexRowEndContainer,
  KeyboardAvoidingViewContainer,
  ScrollViewContainer,
} from "../../../../../utils/common/styles";
import { useUpdateServiceHandlers } from "./hooks";
import { ActionButtonContainer, SubTitleText } from "./styles";
import { IUpdateServiceProps } from "./types";

export const UpdateService: FC<IUpdateServiceProps> = ({
  visible,
  hideDialog,
}) => {
  /**
   *
   * Custom hooks
   *
   */

  const {
    category,
    description,
    duration,
    durationUnit,
    name,
    price,
    service,
    setDescription,
    setDuration,
    setName,
    setPrice,
    successMessage,
    updateServiceLoading,
    updateServiceHasError,
    updateServiceError,
    categoryBarberHandler,
    categoryHairdresserHandler,
    categoryMakeupArtistHandler,
    categoryNailTechnicianHandler,
    categorySpaHandler,
    durationUnitHrsHandler,
    durationUnitMinHandler,
    updateServiceHandler,
  } = useUpdateServiceHandlers(hideDialog);

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <KeyboardAvoidingViewContainer>
        <ScrollViewContainer>
          <Dialog.Title>Update service</Dialog.Title>
          {successMessage && <GSuccessMessage message={successMessage} />}
          {updateServiceHasError && (
            <GErrorMessage message={updateServiceError} />
          )}
          <GTextInput
            testID="serviceName"
            label="Name"
            value={name || service?.name || ""}
            onTextChange={setName}
          />
          <GTextInput
            testID="serviceDescription"
            label="Description"
            value={description || service?.description || ""}
            onTextChange={setDescription}
            multiline
          />
          <GTextInput
            testID="servicePrice"
            label="Price"
            value={price || service?.price?.toString()}
            onTextChange={setPrice}
            keyboardType="decimal-pad"
          />
          <GTextInput
            testID="serviceDuration"
            label="Duration"
            value={duration || service?.duration?.toString()}
            onTextChange={setDuration}
            keyboardType="decimal-pad"
          />
          <SubTitleText>Duration unit</SubTitleText>
          <FlexRowContainer>
            <Flex1>
              <GRadioButton
                label="MIN"
                status={
                  durationUnit === DurationUnitType.Min ||
                  service?.durationUnit === DurationUnitType.Min
                    ? "checked"
                    : "unchecked"
                }
                onPress={durationUnitMinHandler}
              />
            </Flex1>
            <Flex1>
              <GRadioButton
                label="HRS"
                status={
                  durationUnit === DurationUnitType.Hrs ||
                  service?.durationUnit === DurationUnitType.Hrs
                    ? "checked"
                    : "unchecked"
                }
                onPress={durationUnitHrsHandler}
              />
            </Flex1>
          </FlexRowContainer>
          <SubTitleText>Choose category</SubTitleText>
          <FlexColumContainer>
            <GRadioButton
              label={CategoryType.Barber}
              status={
                category === CategoryType.Barber ||
                service?.category === CategoryType.Barber
                  ? "checked"
                  : "unchecked"
              }
              onPress={categoryBarberHandler}
            />
            <GRadioButton
              label={CategoryType.Hairdresser}
              status={
                category === CategoryType.Hairdresser ||
                service?.category === CategoryType.Hairdresser
                  ? "checked"
                  : "unchecked"
              }
              onPress={categoryHairdresserHandler}
            />
            <GRadioButton
              label={CategoryType.MakeupArtist.toString().replace("_", " ")}
              status={
                category === CategoryType.MakeupArtist ||
                service?.category === CategoryType.MakeupArtist
                  ? "checked"
                  : "unchecked"
              }
              onPress={categoryMakeupArtistHandler}
            />
            <GRadioButton
              label={CategoryType.NailTechnician.toString().replace("_", " ")}
              status={
                category === CategoryType.NailTechnician ||
                service?.category === CategoryType.NailTechnician
                  ? "checked"
                  : "unchecked"
              }
              onPress={categoryNailTechnicianHandler}
            />
            <GRadioButton
              label={CategoryType.Spa}
              status={category === CategoryType.Spa ? "checked" : "unchecked"}
              onPress={categorySpaHandler}
            />
          </FlexColumContainer>
          <FlexRowEndContainer>
            <ActionButtonContainer>
              <GButton
                label="Update"
                onPress={updateServiceHandler}
                loading={updateServiceLoading}
                testID="updateServiceButton"
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
        </ScrollViewContainer>
      </KeyboardAvoidingViewContainer>
    </Dialog.Container>
  );
};
