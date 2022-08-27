import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";
import { Board } from "./Components/Board/Board";
import { BoardColumn } from "./Components/Board/BoardColumn";
import { globalLightTheme } from "./Components/Board/Themes/globalTheme";

function App() {
  return (
    <ThemeProvider theme={globalLightTheme}>
      <CssBaseline />
      <Board>
        <BoardColumn></BoardColumn>
        <BoardColumn></BoardColumn>
        <BoardColumn></BoardColumn>
      </Board>
    </ThemeProvider>
  );
}

export default App;
