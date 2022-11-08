import { Text, View } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../utils/theme/types";

export const Container = styled(View)`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const SignUpContent = styled(View)`
  padding: ${({ theme }: { theme: ITheme }) => theme.spacing.container.small}px;
  margin: ${({ theme }: { theme: ITheme }) => theme.spacing.container.small}px;
  width: 100%;
`;

export const FlexRowContainer = styled(View)`
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Flext1 = styled(View)`
  flex: 1;
`;

export const TextStyled = styled(Text)`
  padding: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  margin: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  text-decoration: underline;
  color: ${({ theme }: { theme: ITheme }) => theme.colors.text.primary};
`;
