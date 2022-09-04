import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    buttonText: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    buttonText?: React.CSSProperties;
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
    background: {
      default: "#D7E0AD",
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
  h4: {
    fontSize: "2em",
    fontFamily: "Pacifico",
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
};
