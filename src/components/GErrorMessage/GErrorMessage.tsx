import React, { FC } from "react";
import { ErrorMessage } from "./styles";
import { IGErrorMessageProps } from "./types";

export const GErrorMessage: FC<IGErrorMessageProps> = ({ message }) => {
  return <ErrorMessage>{message}</ErrorMessage>;
};
