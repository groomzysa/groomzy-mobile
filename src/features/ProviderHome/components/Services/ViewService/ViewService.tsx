import React, { FC } from "react";
import Dialog from "react-native-dialog";
import { useSelector } from "react-redux";
import {
  CategoryType,
  DurationUnitType,
} from "../../../../../api/graphql/api.schema";
import { GButton, GRadioButton, GTextInput } from "../../../../../components";
import { RootState } from "../../../../../store/store";
import { FlexRowEndContainer } from "../../../../../utils/common/styles";
import { ActionButtonContainer, SubTitleText } from "./styles";
import { IViewServiceProps } from "./types";

export const ViewService: FC<IViewServiceProps> = ({ visible, hideDialog }) => {
  const {
    homeProvider: { service },
  } = useSelector<RootState, Pick<RootState, "homeProvider">>((state) => state);

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <Dialog.Title>Service details</Dialog.Title>
      <GTextInput
        testID="serviceName"
        label="Name"
        value={service?.name || ""}
        disabled
      />
      <GTextInput
        testID="serviceDescription"
        label="Description"
        value={service?.description || ""}
        multiline
        disabled
      />
      <GTextInput
        testID="servicePrice"
        label="Price"
        value={service?.price?.toString() || ""}
        disabled
      />
      <GTextInput
        testID="serviceDuration"
        label="Duration"
        value={service?.duration?.toString() || ""}
        disabled
      />
      <SubTitleText>Duration unit</SubTitleText>
      {service?.durationUnit === DurationUnitType.Min && (
        <GRadioButton label="MIN" status="checked" disabled />
      )}
      {service?.durationUnit === DurationUnitType.Hrs && (
        <GRadioButton label="HRS" status="checked" disabled />
      )}
      <SubTitleText>Category</SubTitleText>
      {service?.category === CategoryType.Barber && (
        <GRadioButton label={CategoryType.Barber} status="checked" disabled />
      )}
      {service?.category === CategoryType.Hairdresser && (
        <GRadioButton
          label={CategoryType.Hairdresser}
          status="checked"
          disabled
        />
      )}
      {service?.category === CategoryType.MakeupArtist && (
        <GRadioButton
          label={CategoryType.MakeupArtist.toString().replace("_", " ")}
          status="checked"
          disabled
        />
      )}
      {service?.category === CategoryType.NailTechnician && (
        <GRadioButton
          label={CategoryType.NailTechnician.toString().replace("_", " ")}
          status="checked"
          disabled
        />
      )}
      {service?.category === CategoryType.Spa && (
        <GRadioButton label={CategoryType.Spa} status="checked" disabled />
      )}
      <FlexRowEndContainer>
        <ActionButtonContainer>
          <GButton
            label="Done"
            onPress={hideDialog}
            testID="updateServiceButton"
          />
        </ActionButtonContainer>
      </FlexRowEndContainer>
    </Dialog.Container>
  );
};
