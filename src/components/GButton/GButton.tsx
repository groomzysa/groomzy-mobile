import React, { FC } from "react";
import { ButtonContainer, ButtonStyled } from "./styles";
import { IGButtonProps } from "./types";

export const GButton: FC<IGButtonProps> = ({
  testID = "textInput",
  label = "",
  onPress = () => {},
  loading = false,
  variant = "primary",
}) => {
  return (
    <ButtonContainer>
      <ButtonStyled
        testID={testID}
        mode="contained"
        onPress={onPress}
        loading={loading}
        variant={variant}
      >
        {label}
      </ButtonStyled>
    </ButtonContainer>
  );
};
