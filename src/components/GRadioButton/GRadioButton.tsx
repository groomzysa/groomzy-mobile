import React, { FC } from "react";
import { Text } from "react-native";
import { theme } from "../../utils/theme";
import { RadioButtonCheck, RadioButtonCheckContainer } from "./styles";
import { IGRadioButton } from "./types";

export const GRadioButton: FC<IGRadioButton> = ({
  label,
  status = "unchecked",
  value = "",
  onPress = () => {},
}) => {
  return (
    <RadioButtonCheckContainer>
      <RadioButtonCheck
        status={status}
        onPress={onPress}
        value={value}
        color={theme.colors.button.primary}
      />
      {label && <Text>{label}</Text>}
    </RadioButtonCheckContainer>
  );
};
