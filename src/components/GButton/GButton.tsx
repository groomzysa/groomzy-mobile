import React, { FC } from "react";
import { theme } from "../../utils/theme";
import { ButtonContainer, ButtonStyled } from "./styles";
import { IGButtonProps } from "./types";

export const GButton: FC<IGButtonProps> = ({
  testID = "textInput",
  label = "",
  onPress = () => {},
  loading = false,
  variant = "primary",
  mode = "contained",
  disabled = false,
}) => {
  return (
    <ButtonContainer>
      <ButtonStyled
        testID={testID}
        mode={mode}
        onPress={onPress}
        loading={loading}
        variant={variant}
        labelStyle={{
          padding: 0,
          color:
            variant === "secondary"
              ? theme.colors.button.primary
              : theme.colors.white,
        }}
        disabled={disabled}
      >
        {label}
      </ButtonStyled>
    </ButtonContainer>
  );
};
