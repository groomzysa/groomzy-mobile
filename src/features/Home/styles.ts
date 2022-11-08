import { View } from "react-native";
import { Platform } from "react-native";
import styled from "styled-components/native";

import { ITheme } from "../../utils/theme/types";

export const FlatListContainer = styled(View)`
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    Platform.OS === "android" ? theme.spacing.container.xxlarge : 0}px;
`;

export const FlatListItemWrapper = styled(View)`
  margin-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
`;
