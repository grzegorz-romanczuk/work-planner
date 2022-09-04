import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";

import { BoardContainer } from "./Components/Board/BoardContainer";
import { dateFormatter } from "./Utils/dateFormatter";
import { globalLightTheme } from "./Themes/globalTheme";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  const date = dateFormatter(new Date());

  return (
    <ThemeProvider theme={globalLightTheme}>
      <CssBaseline />
      <Navbar />
      <BoardContainer date={date} />
    </ThemeProvider>
  );
}

export default App;
