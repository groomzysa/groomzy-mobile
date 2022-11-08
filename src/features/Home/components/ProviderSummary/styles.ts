import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

import { ITheme } from "../../../../utils/theme/types";

export const ProviderSummaryCard = styled(Card)``;

export const Info = styled(View)`
  padding: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
`;

export const Title = styled(Text)`
  font-family: ${({ theme }: { theme: ITheme }) => theme.fonts.heading};
  font-size: ${({ theme }: { theme: ITheme }) => theme.fontSizes.card.title}px;
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
  padding-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
`;

export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Caption = styled(Text)`
  font-family: ${({ theme }: { theme: ITheme }) => theme.fonts.body};
  font-size: ${({ theme }: { theme: ITheme }) => theme.fontSizes.card.normal}px;
`;
