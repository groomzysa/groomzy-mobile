import { View } from "react-native";
import { Platform } from "react-native";
import styled from "styled-components/native";

import { ITheme } from "../../../../utils/theme/types";

export const HomeExplorerContainer = styled(View)`
  flex: 1;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
`;

export const SearchContainer = styled(View)`
  padding-left: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  padding-right: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;

export const FlatListContainer = styled(View)`
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    Platform.OS === "android" ? theme.spacing.container.xxlarge : 0}px;
`;

export const FlatListItemWrapper = styled(View)`
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
`;
