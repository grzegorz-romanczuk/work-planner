import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    buttonText: React.CSSProperties;
    themeText: React.CSSProperties;
    calendarDate: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    buttonText?: React.CSSProperties;
    themeText?: React.CSSProperties;
    calendarDate?: React.CSSProperties;
  }

  interface Pallete {
    board: Pallete;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    board?: {
      column?: React.CSSProperties["color"];
      buttonBackground?: React.CSSProperties["color"];
      hoverbuttonBackground?: React.CSSProperties["color"];
      focusbuttonBackground?: React.CSSProperties["color"];
      hoverCard?: React.CSSProperties["color"];
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    buttonText: true;
    themeText: true;
    calendarDate: true;
  }
  interface ButtonPropsColorOverrides {
    board: {
      column: true;
      buttonBackground: true;
      hoverbuttonBackground: true;
      focusbuttonBackground: true;
      hoverCard: true;
    };
  }
}

const globalBreakpoints = {
  values: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1536,
  },
};

const defaultTypography = {
  body1: {
    fontSize: "14px",
  },
  h3: {
    fontSize: "1.2em",
    fontWeight: "bold",
  },
  h4: {
    fontSize: "1.8em",
    fontFamily: "Chakra Petch",
    "@media (min-width:360px)": {
      fontSize: "2em",
    },
  },
  h5: {
    fontWeight: "bold",
    fontSize: "1.5em",
  },
  h6: {},
  buttonText: {
    fontSize: "1em",
    fontWeight: "bold",
  },
  themeText: {
    fontSize: "1em",
    fontWeight: 700,
    fontFamily: "Barlow Condensed",
  },
  calendarDate: {
    fontSize: "2.5em",
    fontWeight: 400,
  },
};

export const globalLightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#7a7cff",
      main: "#304ffe",
      dark: "#0026ca",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffffff",
      main: "#e0e0e0",
      dark: "#aeaeae",
      contrastText: "#000000",
    },
    background: {},
    board: {
      column: "#efefef",
      buttonBackground: "#eeeeeef2",
      hoverbuttonBackground: "#dededef2",
      focusbuttonBackground: "#ddddddf2",
      hoverCard: "#eeeeee",
    },
  },
  spacing: 8,
  breakpoints: {
    ...globalBreakpoints,
  },
});

globalLightTheme.typography = {
  ...globalLightTheme.typography,
  ...defaultTypography,
};

export const globalDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#ffad42",
      main: "#f57c00",
      dark: "#bb4d00",
      contrastText: "#000000",
    },
    secondary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    background: {},
    board: {
      column: "#101010",
      buttonBackground: "#111111f2",
      hoverbuttonBackground: "#212121f2",
      focusbuttonBackground: "#222222f2",
      hoverCard: "#111111",
    },
    text: {
      primary: "#eeeeee",
    },
  },
  spacing: 8,
  breakpoints: {
    ...globalBreakpoints,
  },
});

globalDarkTheme.typography = {
  ...globalDarkTheme.typography,
  ...defaultTypography,
};
