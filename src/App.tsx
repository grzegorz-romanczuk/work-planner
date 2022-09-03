import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";

import { BoardContainer } from "./Components/Board/BoardContainer";
import { dateFormatter } from "./Utils/dateFormatter";
import { globalLightTheme } from "./Themes/globalTheme";

function App() {
  const date = dateFormatter(new Date());

  return (
    <ThemeProvider theme={globalLightTheme}>
      <CssBaseline />
      <BoardContainer date={date} />
    </ThemeProvider>
  );
}

export default App;
