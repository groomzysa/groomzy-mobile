import { Image } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../../../utils/theme/types";

export const BannerImage = styled(Image)`
  height: 150px;
  width: 300px;
  border-radius: ${({ theme }: { theme: ITheme }) =>
    theme.spacing.border.radius.small}px;
`;
