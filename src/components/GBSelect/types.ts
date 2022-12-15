import { PickerOption } from "../../utils/types";

export interface IGBSelectProps<T> {
  items: PickerOption<T>[];
  enabledItems?: PickerOption<T>[];
  variant?: "primary" | "secondary" | "cancel";
  label?: string;
  onValueChange?: (itemValue: T, itemIndex: number) => void;
  selectedValue?: unknown;
}
