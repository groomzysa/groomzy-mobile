import { View, SafeAreaView } from "react-native";
import { Platform } from "react-native";
import styled from "styled-components/native";

import { ITheme } from "../../utils/theme/types";

export const HomeSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
`;

export const FlatListContainer = styled(View)`
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    Platform.OS === "android" ? theme.spacing.container.xxlarge : 0}px;
`;

export const FlatListItemWrapper = styled(View)`
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
`;
