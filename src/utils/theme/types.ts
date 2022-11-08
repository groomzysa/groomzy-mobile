export interface IFonts {
  body: string;
  heading: string;
}

export interface IFontSizes {
  body: {
    header: number;
    title: number;
    subTitle: number;
    normal: number;
  };
  card: {
    header: number;
    title: number;
    subTitle: number;
    normal: number;
  };
}

export interface IFontWeights {
  regular: number;
  medium: number;
  bold: number;
}

export interface ISpacing {
  container: {
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
  };
  statusBar: {
    currentHeight: number;
  };
  border: {
    width: {
      small: number;
      medium: number;
      large: number;
    };
    radius: {
      small: number;
      medium: number;
      large: number;
    };
  };
}

export interface IColors {
  brand: {
    primary: string;
    secondary: string;
  };
  bg: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  icon: {
    primary: string;
    secondary: string;
  };
  border: {
    primary: string;
    secondary: string;
  };
  button: {
    primary: string;
    secondary: string;
  };
  disabled: string;
  error: string;
  success: string;
}

export interface ITheme {
  fonts: IFonts;
  fontSizes: IFontSizes;
  fontWeights: IFontWeights;
  spacing: ISpacing;
  colors: IColors;
}
