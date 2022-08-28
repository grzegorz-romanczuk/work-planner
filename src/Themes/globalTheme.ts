import { createTheme } from "@mui/material/styles";

export const globalLightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#D7E0AD",
      paper: "#ffffff",
    },
  },
  typography: {
    h5: {
      fontWeight: "bold",
      fontSize: "1.5em",
    },
    h6: {},
  },
  spacing: 4,
});
