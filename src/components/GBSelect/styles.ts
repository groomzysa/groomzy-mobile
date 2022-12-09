import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";

import { ITheme } from "../../utils/theme/types";

export const PickerContainer = styled(View)`
  padding-top: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  padding-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  border-radius: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;

export const PickerStyled = styled(Picker)`
  width: 100%;
  background-color: ${({
    theme,
    variant,
  }: {
    theme: ITheme;
    variant: "primary" | "secondary" | "cancel";
  }) => theme.colors.button?.[variant]};
  border-radius: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;
