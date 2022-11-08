import { View } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";

import { ITheme } from "../../utils/theme/types";

export const TextInputContainer = styled(View)`
  margin: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;

export const TextInputStyled = styled(TextInput)`
  width: 100%;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
`;
