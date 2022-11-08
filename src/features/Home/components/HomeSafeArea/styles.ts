import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../../../utils/theme/types";

export const HomeSafeAreaStyled = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
`;
