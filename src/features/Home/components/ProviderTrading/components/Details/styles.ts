import { View, Text } from "react-native";
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
  height: 30%;
  width: 100%;
`;

export const DetailCard = styled(Card)`
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
  margin-top: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;

export const Header = styled(Text)`
  font-weight: 500;
  font-size: ${({ theme }: { theme: ITheme }) => theme.fontSizes.body.title}px;
  margin-top: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;

export const TextStyled = styled(Text)`
  padding: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  margin: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  text-decoration: underline;
  color: ${({ theme }: { theme: ITheme }) => theme.colors.text.primary};
`;
