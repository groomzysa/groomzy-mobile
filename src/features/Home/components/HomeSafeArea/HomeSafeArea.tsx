import React, { FC } from "react";

import { HomeSafeAreaStyled } from "./styles";
import { IHomeSafeAreaProps } from "./types";

export const HomeSafeArea: FC<IHomeSafeAreaProps> = ({ children }) => {
  return <HomeSafeAreaStyled>{children}</HomeSafeAreaStyled>;
};
