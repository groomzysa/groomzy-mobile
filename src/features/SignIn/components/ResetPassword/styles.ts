import { View } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../../../utils/theme/types";

export const ContentContainer = styled(View)`
  flex: 1;
  justify-content: center;
  padding: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  margin: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;
