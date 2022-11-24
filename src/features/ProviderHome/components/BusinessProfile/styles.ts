import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { ITheme } from "../../../../utils/theme/types";

export const Container = styled(ScrollView)`
  flex: 1;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
`;

export const Content = styled(View)`
  padding: ${({ theme }: { theme: ITheme }) => theme.spacing.container.small}px;
  margin-right: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.small}px;
  width: 100%;
`;

export const Space = styled(View)`
  padding-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.small}px;
`;
export const FlexRowContainer = styled(View)`
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
`;
