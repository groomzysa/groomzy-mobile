import { Picker } from "@react-native-picker/picker";
import React, { FC } from "react";
import { PickerContainer, PickerStyled } from "./styles";
import { IGBSelectProps } from "./types";

export const GBSelect: FC<IGBSelectProps<unknown>> = ({
  items,
  variant = "secondary",
  label = "Select",
  selectedValue = "",
  onValueChange = () => {},
}) => {
  return (
    <PickerContainer>
      <PickerStyled
        variant={variant}
        onValueChange={(itemValue, index) => onValueChange(itemValue, index)}
        selectedValue={selectedValue}
      >
        <Picker.Item enabled={false} label={label} value="None" />
        {items.map(({ label, value }) => (
          <Picker.Item key={value as string} label={label} value={value} />
        ))}
      </PickerStyled>
    </PickerContainer>
  );
};
