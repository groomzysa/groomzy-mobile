import { View, Platform } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../../../../../utils/theme/types";

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
`;

export const Content = styled(View)`
  padding: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  margin-right: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.small}px;
  width: 100%;
`;

export const FlatListContainer = styled(View)``;

export const FlatListItemWrapper = styled(View)`
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
`;
