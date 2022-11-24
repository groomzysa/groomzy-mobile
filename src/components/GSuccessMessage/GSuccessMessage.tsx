import React, { FC } from "react";
import { SuccessMessage, SuccessMessageContainer } from "./styles";
import { IGSuccessMessageProps } from "./types";

export const GSuccessMessage: FC<IGSuccessMessageProps> = ({ message }) => {
  return (
    <SuccessMessageContainer>
      <SuccessMessage>{message}</SuccessMessage>
    </SuccessMessageContainer>
  );
};
