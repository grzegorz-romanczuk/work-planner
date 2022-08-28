import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";
import { Board } from "./Components/Board/Board";
import { BoardCard } from "./Components/Board/BoardCard";
import { BoardColumn } from "./Components/Board/BoardColumn";
import { globalLightTheme } from "./Themes/globalTheme";

function App() {
  return (
    <ThemeProvider theme={globalLightTheme}>
      <CssBaseline />
      <Board>
        <BoardColumn title="To Do" headerColor="#64dd17">
          <BoardCard title="title" headerColor="#64dd17">
            {" "}
          </BoardCard>
          <BoardCard title="title" headerColor="#64dd17">
            {" "}
          </BoardCard>
          <BoardCard title="title" headerColor="#64dd17">
            {" "}
          </BoardCard>
          <BoardCard title="title" headerColor="#64dd17">
            {" "}
          </BoardCard>
          <BoardCard title="title" headerColor="#64dd17">
            {" "}
          </BoardCard>
          <BoardCard title="title" headerColor="#64dd17">
            {" "}
          </BoardCard>
          <BoardCard title="title" headerColor="#64dd17">
            {" "}
          </BoardCard>
          <BoardCard title="title" headerColor="#64dd17">
            {" "}
          </BoardCard>
        </BoardColumn>
        <BoardColumn title="In Progress" headerColor="#536dfe">
          <BoardCard title="title"> </BoardCard>
        </BoardColumn>
        <BoardColumn title="Completed" headerColor="#ef6c00">
          <BoardCard title="title"> </BoardCard>
        </BoardColumn>
      </Board>
    </ThemeProvider>
  );
}

export default App;
