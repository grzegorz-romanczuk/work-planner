import { createTheme } from "@mui/material/styles";

const globalTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#63b8ff",
      main: "#0989e3",
      dark: "#005db0",
    },
    secondary: {
      main: "#4db6ac",
      light: "#82e9de",
      dark: "#00867d",
    },
    background: {
      default: "#f0f4c3",
    },
  },
});

export default globalTheme;
