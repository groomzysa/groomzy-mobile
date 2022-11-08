import React, { FC } from "react";
import { GTextInput } from "../GTextInput/GTextInput";
import { IGSearchProps } from "./types";

export const GSearch: FC<IGSearchProps> = ({
  testID = "search",
  label = "Search",
}) => {
  return (
    <GTextInput
      prefixIcon="account-search-outline"
      testID={testID}
      label={label}
    />
  );
};
