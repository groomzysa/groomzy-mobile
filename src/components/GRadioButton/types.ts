export interface IGRadioButton {
  status?: "checked" | "unchecked";
  label?: string;
  value?: string;
  onPress?: () => void;
}
