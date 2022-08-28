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
    board?: { column?: React.CSSProperties["color"] };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    buttonText: true;
  }
  interface ButtonPropsColorOverrides {
    board: { column: true };
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
      column: "#eeeeee",
    },
  },
  typography: {
    h5: {
      fontWeight: "bold",
      fontSize: "1.5em",
    },
    h6: {},
    buttonText: {
      fontSize: "1em",
      fontWeight: "bold",
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
