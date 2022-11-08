import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { ITheme } from "../../utils/theme/types";

export const GSafeAreaStyled = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.statusBar.currentHeight}px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
`;
