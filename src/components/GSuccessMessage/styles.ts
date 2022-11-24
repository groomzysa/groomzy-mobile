import { Text, View } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../utils/theme/types";

export const SuccessMessageContainer = styled(View)`
  margin: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;

export const SuccessMessage = styled(Text)`
  display: flex;
  width: 100%;
  background-color: #5cb85c;
  color: ${({ theme }: { theme: ITheme }) => theme.colors.white};
  padding: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
  border-radius: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px; ;
`;
