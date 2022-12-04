import React, { FC, useState } from "react";
import Dialog from "react-native-dialog";
import {
  CategoryType,
  DurationUnitType,
} from "../../../../../api/graphql/api.schema";
import { useAddService } from "../../../../../api/hooks/mutations";
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
import { useAddServiceEffects, useAddServiceHandlers } from "./hooks";
import { ErrorText, SubTitleText } from "./styles";
import { IAddServiceProps } from "./types";

export const AddService: FC<IAddServiceProps> = ({ visible, hideDialog }) => {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [descriptionError, setDescriptionError] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [priceError, setPriceError] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [durationError, setDurationError] = useState<string>("");
  const [durationUnit, setDurationUnit] = useState<DurationUnitType>();
  const [durationUnitError, setDurationUnitError] = useState<string>("");
  const [category, setCategory] = useState<CategoryType>();
  const [categoryError, setCategoryError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  /**
   *
   * Custom hooks
   *
   */
  const {
    addServiceTrigger,
    addService,
    addServiceLoading,
    addServiceHasError,
    addServiceError,
  } = useAddService();

  const {
    addServiceHandler,
    categoryBarberHandler,
    categoryHairdresserHandler,
    categoryMakeupArtistHandler,
    categoryNailTechnicianHandler,
    categorySpaHandler,
    durationUnitHrsHandler,
    durationUnitMinHandler,
  } = useAddServiceHandlers();

  useAddServiceEffects({
    addService,
    hideDialog,
    setCategory,
    setDescription,
    setDuration,
    setDurationUnit,
    setName,
    setPrice,
    setSuccessMessage,
    successMessage,
  });

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
                onPress={() => durationUnitMinHandler(setDurationUnit)}
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
                onPress={() => durationUnitHrsHandler(setDurationUnit)}
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
              onPress={() => categoryBarberHandler(setCategory)}
            />
            <GRadioButton
              label={CategoryType.Hairdresser}
              status={
                category === CategoryType.Hairdresser ? "checked" : "unchecked"
              }
              onPress={() => categoryHairdresserHandler(setCategory)}
            />
            <GRadioButton
              label={CategoryType.MakeupArtist.toString().replace("_", " ")}
              status={
                category === CategoryType.MakeupArtist ? "checked" : "unchecked"
              }
              onPress={() => categoryMakeupArtistHandler(setCategory)}
            />
            <GRadioButton
              label={CategoryType.NailTechnician.toString().replace("_", " ")}
              status={
                category === CategoryType.NailTechnician
                  ? "checked"
                  : "unchecked"
              }
              onPress={() => categoryNailTechnicianHandler(setCategory)}
            />
            <GRadioButton
              label={CategoryType.Spa}
              status={category === CategoryType.Spa ? "checked" : "unchecked"}
              onPress={() => categorySpaHandler(setCategory)}
            />
          </FlexColumContainer>
          <FlexRowEndContainer>
            <GButton
              label="Add"
              onPress={() =>
                addServiceHandler({
                  addServiceTrigger,
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
                  setCategoryError,
                  setDescriptionError,
                  setDurationError,
                  setDurationUnitError,
                  setNameError,
                  setPriceError,
                })
              }
              loading={addServiceLoading}
              testID="addServiceButton"
            />
            <GButton
              label="Cancel"
              onPress={hideDialog}
              testID="cancelAddServiceButton"
              variant="cancel"
            />
          </FlexRowEndContainer>
        </ScrollViewContainer>
      </KeyboardAvoidingViewContainer>
    </Dialog.Container>
  );
};
