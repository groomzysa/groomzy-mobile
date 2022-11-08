import React, { FC } from "react";
import { SuccessMessage } from "./styles";
import { IGSuccessMessageProps } from "./types";

export const GSuccessMessage: FC<IGSuccessMessageProps> = ({ message }) => {
  return <SuccessMessage>{message}</SuccessMessage>;
};
