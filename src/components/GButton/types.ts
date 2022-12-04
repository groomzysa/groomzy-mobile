export interface IGButtonProps {
  testID?: string;
  label?: string;
  onPress?: () => void;
  loading?: boolean;
  variant?: "primary" | "secondary" | "cancel";
  mode?: "contained" | "contained-tonal" | "elevated" | "outlined" | "text";
  disabled?: boolean;
}
