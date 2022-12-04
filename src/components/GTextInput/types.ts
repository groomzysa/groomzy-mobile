import { Dispatch, SetStateAction } from "react";

export interface IGTextInputProps {
  testID?: string;
  prefixIcon?: string;
  sufixIcon?: string;
  placeholder?: string;
  label?: string;
  secureTextEntry?: boolean;
  onTextChange?: Dispatch<SetStateAction<string>>;
  sufixIconOnPress?: () => void;
  errorMessage?: string;
  value?: string;
  multiline?: boolean;
  disabled?: boolean;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url";
}
