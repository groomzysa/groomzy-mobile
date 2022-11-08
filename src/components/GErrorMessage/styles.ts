import { Text } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../utils/theme/types";

export const ErrorMessage = styled(Text)`
  display: flex;
  width: 100%;
  background-color: red;
  color: white;
  padding: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
  border-radius: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px; ;
`;
