import { IFonts, IFontSizes, IFontWeights } from "./types";

export const fonts: IFonts = {
  body: "Lato_400Regular",
  heading: "Oswald_400Regular",
};

export const fontSizes: IFontSizes = {
  body: {
    subTitle: 14,
    normal: 16,
    title: 20,
    largeTitle: 24,
    header: 30,
  },
  card: {
    subTitle: 10,
    normal: 12,
    title: 16,
    header: 18,
  },
  button: {
    small: 14,
    medium: 16,
    large: 26,
  },
};

export const fontWeights: IFontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};
