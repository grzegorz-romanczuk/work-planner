import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", minHeight: 0 }}>
          <Navbar />
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", flex: 1, minHeight: 0 }}
        >
          <BoardContainer date={date} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
