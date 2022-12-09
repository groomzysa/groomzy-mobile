import { View, Platform } from "react-native";
import MapView from "react-native-maps";
import { Card } from "react-native-paper";
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

export const MapViewContainer = styled(MapView)`
  height: 40%;
  width: 100%;
`;

export const DayTimeCard = styled(Card)`
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
  margin-top: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;
