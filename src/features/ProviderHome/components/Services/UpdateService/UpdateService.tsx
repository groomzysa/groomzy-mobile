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
import { useUpdateServiceEffects, useUpdateServiceHandlers } from "./hooks";
import { ActionButtonContainer, SubTitleText } from "./styles";
import { IUpdateServiceProps } from "./types";

export const UpdateService: FC<IUpdateServiceProps> = ({
  service,
  visible,
  hideDialog,
}) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [durationUnit, setDurationUnit] = useState<DurationUnitType>();
  const [category, setCategory] = useState<CategoryType>();
  const [successMessage, setSuccessMessage] = useState<string>("");

  const { id: serviceId } = service;

  /**
   *
   * Custom hooks
   *
   */

  const {
    updateService,
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
  } = useUpdateServiceHandlers();

  useUpdateServiceEffects({
    hideDialog,
    setCategory,
    setDescription,
    setDuration,
    setDurationUnit,
    setName,
    setPrice,
    setSuccessMessage,
    successMessage,
    updateService,
  });

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
                  service.durationUnit === DurationUnitType.Min
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
                  durationUnit === DurationUnitType.Hrs ||
                  service.durationUnit === DurationUnitType.Hrs
                    ? "checked"
                    : "unchecked"
                }
                onPress={() => durationUnitHrsHandler(setDurationUnit)}
              />
            </Flex1>
          </FlexRowContainer>
          <SubTitleText>Choose category</SubTitleText>
          <FlexColumContainer>
            <GRadioButton
              label={CategoryType.Barber}
              status={
                category === CategoryType.Barber ||
                service.category === CategoryType.Barber
                  ? "checked"
                  : "unchecked"
              }
              onPress={() => categoryBarberHandler(setCategory)}
            />
            <GRadioButton
              label={CategoryType.Hairdresser}
              status={
                category === CategoryType.Hairdresser ||
                service.category === CategoryType.Hairdresser
                  ? "checked"
                  : "unchecked"
              }
              onPress={() => categoryHairdresserHandler(setCategory)}
            />
            <GRadioButton
              label={CategoryType.MakeupArtist.toString().replace("_", " ")}
              status={
                category === CategoryType.MakeupArtist ||
                service.category === CategoryType.MakeupArtist
                  ? "checked"
                  : "unchecked"
              }
              onPress={() => categoryMakeupArtistHandler(setCategory)}
            />
            <GRadioButton
              label={CategoryType.NailTechnician.toString().replace("_", " ")}
              status={
                category === CategoryType.NailTechnician ||
                service.category === CategoryType.NailTechnician
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
            <ActionButtonContainer>
              <GButton
                label="Update"
                onPress={() =>
                  updateServiceHandler({
                    category,
                    description,
                    duration,
                    durationUnit,
                    name,
                    price,
                    serviceId,
                  })
                }
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
