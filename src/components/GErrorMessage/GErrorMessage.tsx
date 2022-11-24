import React, { FC } from "react";
import { ErrorMessage, ErrorMessageContainer } from "./styles";
import { IGErrorMessageProps } from "./types";

export const GErrorMessage: FC<IGErrorMessageProps> = ({ message }) => {
  return (
    <ErrorMessageContainer>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorMessageContainer>
  );
};
