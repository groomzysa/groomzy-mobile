import { Text } from "react-native";
import styled from "styled-components/native";

import { ITheme } from "../../utils/theme/types";

export const GTitleStyled = styled(Text)`
  font-size: ${({ theme }: { theme: ITheme }) => theme.fontSizes.body.title}px;
`;
