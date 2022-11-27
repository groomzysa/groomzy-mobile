import { View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { ITheme } from "../../../../../../../utils/theme/types";

export const ServiceCard = styled(Card)`
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.bg.primary};
`;

export const ViewButtonContainer = styled(View)`
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.white};
  width: 50px;
  border-radius: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;
