import React, { FC } from "react";

import { GTitleStyled } from "./styles";
import { IGTitleProps } from "./types";

export const GTitle: FC<IGTitleProps> = ({ title }) => {
  return <GTitleStyled>{title}</GTitleStyled>;
};
