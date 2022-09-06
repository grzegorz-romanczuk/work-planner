import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    buttonText: React.CSSProperties;
    themeText: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    buttonText?: React.CSSProperties;
    themeText?: React.CSSProperties;
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
      hoverCard?: React.CSSProperties["color"];
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    buttonText: true;
    themeText: true;
  }
  interface ButtonPropsColorOverrides {
    board: {
      column: true;
      buttonBackground: true;
      hoverbuttonBackground: true;
      hoverCard: true;
    };
  }
}

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
    background: {
      default: "#eeeeee",
      paper: "#ffffff",
    },
    board: {
      column: "#efefef",
      buttonBackground: "#eeeeeef2",
      hoverbuttonBackground: "#dededef2",
      hoverCard: "#eeeeee",
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1536,
    },
  },
});

globalLightTheme.typography = {
  ...globalLightTheme.typography,

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
    fontSize: "0.9em",
    fontWeight: 700,
    fontFamily: "Barlow Condensed",
  },
};

export const globalDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#ffad42",
      main: "#f57c00",
      dark: "#bb4d00",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#000000",
    },
    background: {},
    board: {},
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1536,
    },
  },
});

globalDarkTheme.typography = {
  ...globalDarkTheme.typography,

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
    fontSize: "0.9em",
    fontWeight: 700,
    fontFamily: "Barlow Condensed",
  },
};
