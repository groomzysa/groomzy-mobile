import { Text, View } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../utils/theme/types";

export const ContentContainer = styled(View)`
  flex: 1;
  justify-content: center;
  padding: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  margin: ${({ theme }: { theme: ITheme }) =>
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

export const TitleText = styled(Text)`
  font-size: ${({ theme }: { theme: ITheme }) => theme.fontSizes.body.normal}px;
  margin-top: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.small}px;
  font-weight: 500;
`;
