import { Picker } from "@react-native-picker/picker";
import { isEmpty } from "lodash";
import React, { FC } from "react";
import { PickerContainer, PickerStyled } from "./styles";
import { IGBSelectProps } from "./types";

export const GBSelect: FC<IGBSelectProps<unknown>> = ({
  items,
  enabledItems = [],
  variant = "secondary",
  label = "Select",
  selectedValue = "",
  onValueChange = () => {},
}) => {
  const isItemEnabled = (value: unknown) => {
    if (isEmpty(enabledItems)) return true;

    if (enabledItems.find((enabledItem) => enabledItem.value === value)) {
      return true;
    }

    return false;
  };

  return (
    <PickerContainer>
      <PickerStyled
        variant={variant}
        onValueChange={(itemValue, index) => onValueChange(itemValue, index)}
        selectedValue={selectedValue}
      >
        <Picker.Item enabled={false} label={label} value="None" />
        {items.map(({ value, label }) => (
          <Picker.Item
            key={value as string}
            label={label}
            value={value}
            enabled={isItemEnabled(value)}
            color={isItemEnabled(value) ? "none" : "lightgray"}
          />
        ))}
      </PickerStyled>
    </PickerContainer>
  );
};
