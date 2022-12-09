import { Animated, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../../../utils/theme/types";

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
  padding: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
`;

export const TabButton = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  padding: ${({ theme }: { theme: ITheme }) => theme.spacing.container.small}px;
  background-color: ${({
    theme,
    currentTab,
    activeColor,
  }: {
    theme: ITheme;
    currentTab: boolean;
    activeColor: string;
    currentTabIndex: number;
    inputRangeLength: number;
  }) => (currentTab ? activeColor : theme.colors.button.secondary)};
  border-right-width: ${({
    currentTabIndex,
    inputRangeLength,
  }: {
    theme: ITheme;
    currentTabIndex: number;
    inputRangeLength: number;
  }) => (currentTabIndex < inputRangeLength ? 1 : 0)}px;
  border-right-color: ${({
    seperatorColor,
  }: {
    theme: ITheme;
    seperatorColor?: string;
  }) => (seperatorColor ? seperatorColor : "lightgray")}; ;
`;

export const TabButtonText = styled(Animated.Text)`
  opacity: ${({
    opacity,
  }: {
    theme: ITheme;
    opacity: number;
    currentTab: boolean;
  }) => opacity};
  font-weight: ${({ currentTab }: { theme: ITheme; currentTab: boolean }) =>
    currentTab ? "500" : "normal"};
`;

export const Space = styled(View)`
  padding-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.small}px;
`;
