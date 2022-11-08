import { Platform, StatusBar } from "react-native";
import { ISpacing } from "./types";

export const spacing: ISpacing = {
  container: {
    xxsmall: 4,
    xsmall: 8,
    small: 16,
    medium: 24,
    large: 32,
    xlarge: 48,
    xxlarge: 56,
  },
  statusBar: {
    currentHeight:
      Platform.OS === "android" ? StatusBar?.currentHeight ?? 0 : 0,
  },
  border: {
    width: {
      small: 1,
      medium: 2,
      large: 3,
    },
    radius: {
      small: 8,
      medium: 16,
      large: 24,
    },
  },
};
