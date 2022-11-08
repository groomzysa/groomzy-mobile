import { Dispatch, SetStateAction } from "react";

export interface IGTextInputProps {
  testID?: string;
  prefixIcon?: string;
  sufixIcon?: string;
  placeholder?: string;
  label?: string;
  secureTextEntry?: boolean;
  onTextChange?: Dispatch<SetStateAction<string>>;
  errorMessage?: string;
  value?: string;
}
