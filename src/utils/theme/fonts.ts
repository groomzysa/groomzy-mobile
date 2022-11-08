import { IFonts, IFontSizes, IFontWeights } from "./types";

export const fonts: IFonts = {
  body: "Lato_400Regular",
  heading: "Oswald_400Regular",
};

export const fontSizes: IFontSizes = {
  body: {
    subTitle: 14,
    normal: 16,
    title: 24,
    header: 30,
  },
  card: {
    subTitle: 10,
    normal: 12,
    title: 16,
    header: 18,
  },
};

export const fontWeights: IFontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};
