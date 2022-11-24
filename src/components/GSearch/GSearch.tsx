import React, { FC } from "react";
import { GTextInput } from "../GTextInput/GTextInput";
import { IGSearchProps } from "./types";

export const GSearch: FC<IGSearchProps> = ({
  testID = "search",
  label = "Search",
  value = "",
  onTextChange = () => {},
}) => {
  return (
    <GTextInput
      prefixIcon="account-search-outline"
      testID={testID}
      label={label}
      value={value}
      onTextChange={onTextChange}
    />
  );
};
