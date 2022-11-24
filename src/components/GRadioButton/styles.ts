import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import styled from "styled-components/native";
import { ITheme } from "../../utils/theme/types";

export const RadioButtonCheckContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const RadioButtonCheck = styled(RadioButton)`
  margin-right: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;

export const RadioButtonLabel = styled(Text)`
  color: ${({ theme, disabled }: { theme: ITheme; disabled: boolean }) =>
    disabled ? theme.colors.disabled : "none"};
`;
