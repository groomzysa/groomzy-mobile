import { ImageBackground, Text, View, Image } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../../../utils/theme/types";

export const AppDrawerHeaderImageBackground = styled(ImageBackground)`
  padding: ${({ theme }: { theme: ITheme }) => theme.spacing.container.small}px;
`;

export const AppDrawerHeaderImage = styled(Image)`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;

export const AppDrawerVersionContainer = styled(View)`
  padding: ${({ theme }: { theme: ITheme }) => theme.spacing.container.small}px;
  border-top-width: 1px;
  border-top-color: lightgray;
`;

export const AppDrawerVersionContent = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const DrawerItemListContainer = styled(View)`
  flex: 1;
  background-color: white;
  padding-top: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
`;

export const AppDrawerText = styled(Text)`
  font-size: ${({ theme }: { theme: ITheme }) =>
    theme.fontSizes.body.subTitle}px;
`;

export const DrawerUserName = styled(Text)`
  color: white;
  font-size: ${({ theme }: { theme: ITheme }) => theme.fontSizes.body.normal}px;
  font-weight: bold;
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;
