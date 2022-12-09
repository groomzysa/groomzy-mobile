import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styled from "styled-components/native";

import { ITheme } from "../../utils/theme/types";

export const DateTimePickerContainer = styled(View)`
  padding-top: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  padding-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  margin: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;

export const DateTimePickerStyled = styled(DateTimePicker)`
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
