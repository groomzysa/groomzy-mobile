import React, { FC } from "react";
import Dialog from "react-native-dialog";
import {
  CategoryType,
  DurationUnitType,
} from "../../../../../../../api/graphql/api.schema";
import {
  GButton,
  GRadioButton,
  GTextInput,
} from "../../../../../../../components";
import { FlexRowEndContainer } from "../../../../../../../utils/common/styles";
import { SubTitleText } from "./styles";
import { IViewServiceProps } from "./types";

export const ViewService: FC<IViewServiceProps> = ({
  service,
  visible,
  hideDialog,
}) => {
  const { name, description, price, duration, durationUnit, category } =
    service;

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <Dialog.Title>Service details</Dialog.Title>
      <GTextInput
        testID="serviceName"
        label="Name"
        value={name || ""}
        disabled
      />
      <GTextInput
        testID="serviceDescription"
        label="Description"
        value={description || ""}
        multiline
        disabled
      />
      <GTextInput
        testID="servicePrice"
        label="Price"
        value={price?.toString() || ""}
        disabled
      />
      <GTextInput
        testID="serviceDuration"
        label="Duration"
        value={duration?.toString() || ""}
        disabled
      />
      <SubTitleText>Duration unit</SubTitleText>
      {durationUnit === DurationUnitType.Min && (
        <GRadioButton label="MIN" status="checked" disabled />
      )}
      {durationUnit === DurationUnitType.Hrs && (
        <GRadioButton label="HRS" status="checked" disabled />
      )}
      <SubTitleText>Category</SubTitleText>
      {category === CategoryType.Barber && (
        <GRadioButton label={CategoryType.Barber} status="checked" disabled />
      )}
      {category === CategoryType.Hairdresser && (
        <GRadioButton
          label={CategoryType.Hairdresser}
          status="checked"
          disabled
        />
      )}
      {category === CategoryType.MakeupArtist && (
        <GRadioButton
          label={CategoryType.MakeupArtist.toString().replace("_", " ")}
          status="checked"
          disabled
        />
      )}
      {category === CategoryType.NailTechnician && (
        <GRadioButton
          label={CategoryType.NailTechnician.toString().replace("_", " ")}
          status="checked"
          disabled
        />
      )}
      {category === CategoryType.Spa && (
        <GRadioButton label={CategoryType.Spa} status="checked" disabled />
      )}
      <FlexRowEndContainer>
        <GButton
          label="Done"
          onPress={hideDialog}
          testID="updateServiceButton"
        />
      </FlexRowEndContainer>
    </Dialog.Container>
  );
};
