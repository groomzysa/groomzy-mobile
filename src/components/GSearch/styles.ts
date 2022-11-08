import { TextInput, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styled from "styled-components/native";

import { ITheme } from "../../utils/theme/types";

export const SearchContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  border-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.border.secondary};
  border-width: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.border.width.small}px;
  border-radius: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.border.radius.small}px;
  padding: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
  margin: ${({ theme }: { theme: ITheme }) => theme.spacing.container.xsmall}px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
`;

export const SearchIcon = styled(Feather)`
  margin-right: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
`;

export const SearchTextInput = styled(TextInput)`
  border: none;
  outline-style: none;
  width: 100%;
`;
