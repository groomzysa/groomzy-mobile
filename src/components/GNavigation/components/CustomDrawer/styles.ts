import { ImageBackground, Text, View, Image } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../../../utils/theme/types";

export const AppDrawerHeaderImageBackground = styled(ImageBackground)`
  padding-top: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xlarge}px;
  padding-left: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.small}px;
`;

export const AppDrawerHeaderImage = styled(Image)`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;

export const AppDrawerBottomContainer = styled(View)`
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
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.white};
  padding-top: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
`;

export const AppDrawerText = styled(Text)`
  font-size: ${({ theme }: { theme: ITheme }) =>
    theme.fontSizes.body.subTitle}px;
`;

export const DrawerUserName = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.small}px;
`;

export const SignOutText = styled(Text)`
  font-size: ${({ theme }: { theme: ITheme }) =>
    theme.fontSizes.body.subTitle}px;
  font-weight: bold;
  margin-left: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
  margin-right: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.medium}px;
  color: ${({ theme }: { theme: ITheme }) => theme.colors.white};
`;
