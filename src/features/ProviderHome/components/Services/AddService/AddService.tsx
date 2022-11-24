import React, { FC, useState, useEffect } from "react";
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
import { ADD_SERVICE_MESSAGE } from "../../../../../utils/messages";
import { ErrorText, SubTitleText } from "./styles";

export const AddService: FC<{ visible: boolean; hideDialog: () => void }> = ({
  visible,
  hideDialog,
}) => {
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

  /**
   *
   * Effects
   *
   */
  useEffect(() => {
    if (!addService) return;

    // After user signed up successfully
    // Reset state and redirect to sign in screen
    setName("");
    setDescription("");
    setPrice("");
    setDuration("");
    setDurationUnit(undefined);
    setCategory(undefined);

    setTimeout(() => {
      hideDialog();
    }, 5000);
  }, [addService]);

  /**
   *
   * Handlers
   *
   */
  const durationUnitMinHandler = () => {
    setDurationUnit(DurationUnitType.Min);
  };

  const durationUnitHrsHandler = () => {
    setDurationUnit(DurationUnitType.Hr);
  };

  const categoryBarberHandler = () => {
    setCategory(CategoryType.Barber);
  };
  const categoryHairdresserHandler = () => {
    setCategory(CategoryType.Hairdresser);
  };
  const categoryMakeupArtistHandler = () => {
    setCategory(CategoryType.MakeupArtist);
  };
  const categoryNailTechnicianHandler = () => {
    setCategory(CategoryType.NailTechnician);
  };
  const categorySpaHandler = () => {
    setCategory(CategoryType.Spa);
  };

  const addServiceHandler = () => {
    const arbortAddService =
      !name ||
      !description ||
      !price ||
      !duration ||
      !durationUnit ||
      !category;

    if (!name) {
      setNameError("Name is required!");
    } else if (nameError) {
      setNameError("");
    }
    if (!description) {
      setDescriptionError("Description is required!");
    } else if (descriptionError) {
      setDescriptionError("");
    }
    if (!price) {
      setPriceError("Price is required!");
    } else if (priceError) {
      setPriceError("");
    }
    if (!duration) {
      setDurationError("Duration is required!");
    } else if (durationError) {
      setDurationError("");
    }
    if (!durationUnit) {
      setDurationUnitError("Duration unit is required!");
    } else if (durationUnitError) {
      setDurationUnitError("");
    }
    if (!category) {
      setCategoryError("Category is required!");
    } else if (categoryError) {
      setCategoryError("");
    }

    if (arbortAddService) return;

    addServiceTrigger({
      name,
      description,
      price: Number(price),
      duration: Number(duration),
      durationUnit,
      category,
      inHouse: false,
    });
  };

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <KeyboardAvoidingViewContainer>
        <ScrollViewContainer>
          <Dialog.Title>Add service</Dialog.Title>
          {addService && <GSuccessMessage message={ADD_SERVICE_MESSAGE} />}
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
                  durationUnit === DurationUnitType.Hr ? "checked" : "unchecked"
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
            <GButton
              label="Add"
              onPress={addServiceHandler}
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
