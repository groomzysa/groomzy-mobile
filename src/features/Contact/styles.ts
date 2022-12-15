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

export const SocialsContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }: { theme: ITheme }) => theme.spacing.container.small}px;
`;

export const SocialContainer = styled(View)`
  margin: ${({ theme }: { theme: ITheme }) => theme.spacing.container.xsmall}px;
`;

export const TextStyled = styled(Text)`
  padding: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  margin: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  text-decoration: underline;
  color: ${({ theme }: { theme: ITheme }) => theme.colors.text.primary};
`;
