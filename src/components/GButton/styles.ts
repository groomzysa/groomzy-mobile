import { View } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

import { ITheme } from "../../utils/theme/types";

export const ButtonContainer = styled(View)`
  padding-top: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  padding-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;

export const ButtonStyled = styled(Button)`
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
