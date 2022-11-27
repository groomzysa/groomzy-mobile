import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../theme/types";

export const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
`;

export const KeyboardAvoidingViewContainer = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
`;

export const ScrollViewContainer = styled(ScrollView)``;

export const FlexRowContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FlexRowEndContainer = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const FlexColumContainer = styled(View)`
  flex-direction: column;
`;

export const Flex1 = styled(View)`
  flex: 1;
`;

export const Flex2 = styled(View)`
  flex: 2;
`;
