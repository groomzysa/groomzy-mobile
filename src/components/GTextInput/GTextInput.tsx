import React, { FC } from "react";
import { HelperText, TextInput } from "react-native-paper";
import { theme } from "../../utils/theme";
import { TextInputContainer, TextInputStyled } from "./styles";
import { IGTextInputProps } from "./types";

export const GTextInput: FC<IGTextInputProps> = ({
  testID = "textInput",
  prefixIcon = "",
  sufixIcon = "",
  placeholder = "",
  label = "",
  secureTextEntry = false,
  onTextChange = () => {},
  errorMessage = "",
  value = "",
  keyboardType = "default",
  multiline = false,
  disabled = false,
}) => {
  const showError = errorMessage.length > 0;

  return (
    <TextInputContainer>
      <TextInputStyled
        label={label}
        testID={testID}
        value={value}
        placeholder={placeholder}
        left={prefixIcon && <TextInput.Icon icon={prefixIcon} />}
        right={prefixIcon && <TextInput.Icon icon={sufixIcon} />}
        activeUnderlineColor={theme.colors.border.primary}
        secureTextEntry={secureTextEntry}
        onChangeText={onTextChange}
        error={showError}
        keyboardType={keyboardType}
        multiline={multiline}
        disabled={disabled}
      />
      {showError && (
        <HelperText type="error" visible={showError}>
          {errorMessage}
        </HelperText>
      )}
    </TextInputContainer>
  );
};
