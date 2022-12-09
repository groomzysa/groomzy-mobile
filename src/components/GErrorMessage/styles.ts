import { Text, View } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../utils/theme/types";

export const ErrorMessageContainer = styled(View)``;

export const ErrorMessage = styled(Text)`
  display: flex;
  width: 100%;
  background-color: #f44336;
  color: ${({ theme }: { theme: ITheme }) => theme.colors.white};
  padding: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
  border-radius: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px; ;
`;
