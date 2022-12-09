import { Text, View } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../../../../utils/theme/types";

export const SubTitleText = styled(Text)`
  font-size: ${({ theme }: { theme: ITheme }) => theme.fontSizes.body.normal}px;
  margin-top: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
  margin-left: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
  font-weight: 500;
`;

export const ErrorText = styled(Text)`
  font-size: ${({ theme }: { theme: ITheme }) =>
    theme.fontSizes.body.subTitle}px;
  margin-left: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xsmall}px;
  color: ${({ theme }: { theme: ITheme }) => theme.colors.error};
`;

export const ActionButtonContainer = styled(View)`
  margin: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.container.xxsmall}px;
`;
