import { Dispatch, SetStateAction } from "react";

export interface IGSearchProps {
  testID?: string;
  label?: string;
  onTextChange?: Dispatch<SetStateAction<string>>;
  value?: string;
}
