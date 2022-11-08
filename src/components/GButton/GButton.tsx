import React, { FC } from "react";
import { ButtonContainer, ButtonStyled } from "./styles";
import { IGButtonProps } from "./types";

export const GButton: FC<IGButtonProps> = ({
  testID = "textInput",
  label = "",
  onPress = () => {},
  loading = false,
}) => {
  return (
    <ButtonContainer>
      <ButtonStyled
        testID={testID}
        mode="contained"
        onPress={onPress}
        loading={loading}
      >
        {label}
      </ButtonStyled>
    </ButtonContainer>
  );
};
