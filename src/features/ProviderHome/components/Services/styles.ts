import { View, Text, Platform } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../../../utils/theme/types";

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
`;

export const Content = styled(View)`
  width: 100%;
`;

export const AddButtonContainer = styled(View)`
  flex-direction: row;
  padding-top: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  padding-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  padding-left: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
  padding-right: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.button.primary};
  width: 70px;
  border-radius: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  margin-left: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.small}px;
`;

export const AddButtonText = styled(Text)`
  color: ${({ theme }: { theme: ITheme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }: { theme: ITheme }) =>
    theme.fontSizes.button.small}px; ;
`;

export const FlatListContainer = styled(View)`
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    Platform.OS === "android" ? theme.spacing.container.xxlarge : 0}px;
`;

export const FlatListItemWrapper = styled(View)`
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
`;
