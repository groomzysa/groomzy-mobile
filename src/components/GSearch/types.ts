import { Dispatch, SetStateAction } from "react";

export interface IGSearchProps {
  testID?: string;
  label?: string;
  onTextChange?: (text: string) => void;
  value?: string;
}
