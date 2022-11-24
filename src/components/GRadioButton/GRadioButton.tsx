import React, { FC } from "react";
import { Text } from "react-native";
import { theme } from "../../utils/theme";
import {
  RadioButtonCheck,
  RadioButtonCheckContainer,
  RadioButtonLabel,
} from "./styles";
import { IGRadioButton } from "./types";

export const GRadioButton: FC<IGRadioButton> = ({
  label,
  status = "unchecked",
  value = "",
  onPress = () => {},
  disabled = false,
}) => {
  return (
    <RadioButtonCheckContainer>
      <RadioButtonCheck
        status={status}
        onPress={onPress}
        value={value}
        color={theme.colors.button.primary}
        disabled={disabled}
      />
      {label && (
        <RadioButtonLabel disabled={disabled}>{label}</RadioButtonLabel>
      )}
    </RadioButtonCheckContainer>
  );
};
