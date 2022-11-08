import React, { FC } from "react";

import { GSafeAreaStyled } from "./styles";
import { IGSafeAreaProps } from "./types";

export const GSafeArea: FC<IGSafeAreaProps> = ({ children }) => {
  return <GSafeAreaStyled>{children}</GSafeAreaStyled>;
};
