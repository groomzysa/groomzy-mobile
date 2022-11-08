import { View } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

import { ITheme } from "../../utils/theme/types";

export const ButtonContainer = styled(View)`
  padding: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  margin: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;

export const ButtonStyled = styled(Button)`
  width: 100%;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.button.primary};
  border-radius: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;
