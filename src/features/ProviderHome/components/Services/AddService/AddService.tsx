import React, { FC, useState } from "react";
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
import { useAddServiceHandlers } from "./hooks";
import { ActionButtonContainer, ErrorText, SubTitleText } from "./styles";
import { IAddServiceProps } from "./types";

export const AddService: FC<IAddServiceProps> = ({ visible, hideDialog }) => {
  /**
   *
   * Custom hooks
   *
   */

  const {
    addServiceLoading,
    addServiceHasError,
    addServiceError,
    category,
    categoryError,
    description,
    descriptionError,
    duration,
    durationError,
    durationUnit,
    durationUnitError,
    name,
    nameError,
    price,
    priceError,
    setDescription,
    setDuration,
    setName,
    setPrice,
    successMessage,
    addServiceHandler,
    categoryBarberHandler,
    categoryHairdresserHandler,
    categoryMakeupArtistHandler,
    categoryNailTechnicianHandler,
    categorySpaHandler,
    durationUnitHrsHandler,
    durationUnitMinHandler,
  } = useAddServiceHandlers(hideDialog);

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <KeyboardAvoidingViewContainer>
        <ScrollViewContainer>
          <Dialog.Title>Add service</Dialog.Title>
          {successMessage && <GSuccessMessage message={successMessage} />}
          {addServiceHasError && <GErrorMessage message={addServiceError} />}
          <GTextInput
            testID="serviceName"
            label="Name"
            value={name}
            onTextChange={setName}
            errorMessage={nameError}
          />
          <GTextInput
            testID="serviceDescription"
            label="Description"
            value={description}
            onTextChange={setDescription}
            errorMessage={descriptionError}
            multiline
          />
          <GTextInput
            testID="servicePrice"
            label="Price"
            value={price}
            onTextChange={setPrice}
            errorMessage={priceError}
            keyboardType="decimal-pad"
          />
          <GTextInput
            testID="serviceDuration"
            label="Duration"
            value={duration}
            onTextChange={setDuration}
            errorMessage={durationError}
            keyboardType="decimal-pad"
          />
          <FlexRowContainer>
            <Flex1>
              <GRadioButton
                label="MIN"
                status={
                  durationUnit === DurationUnitType.Min
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
                  durationUnit === DurationUnitType.Hrs
                    ? "checked"
                    : "unchecked"
                }
                onPress={durationUnitHrsHandler}
              />
            </Flex1>
          </FlexRowContainer>
          {durationUnitError && <ErrorText>{durationUnitError}</ErrorText>}
          <SubTitleText>Choose category</SubTitleText>
          {categoryError && <ErrorText>{categoryError}</ErrorText>}
          <FlexColumContainer>
            <GRadioButton
              label={CategoryType.Barber}
              status={
                category === CategoryType.Barber ? "checked" : "unchecked"
              }
              onPress={categoryBarberHandler}
            />
            <GRadioButton
              label={CategoryType.Hairdresser}
              status={
                category === CategoryType.Hairdresser ? "checked" : "unchecked"
              }
              onPress={categoryHairdresserHandler}
            />
            <GRadioButton
              label={CategoryType.MakeupArtist.toString().replace("_", " ")}
              status={
                category === CategoryType.MakeupArtist ? "checked" : "unchecked"
              }
              onPress={categoryMakeupArtistHandler}
            />
            <GRadioButton
              label={CategoryType.NailTechnician.toString().replace("_", " ")}
              status={
                category === CategoryType.NailTechnician
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
                label="Add"
                onPress={addServiceHandler}
                loading={addServiceLoading}
                testID="addServiceButton"
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
