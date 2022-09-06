import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import React, { useState } from "react";

import { BoardContainer } from "./Components/Board/BoardContainer";
import { dateFormatter } from "./Utils/dateFormatter";
import { globalLightTheme, globalDarkTheme } from "./Themes/globalTheme";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  const date = dateFormatter(new Date());
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightModeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsLightMode(event.target.checked);
  };

  return (
    <ThemeProvider theme={isLightMode ? globalLightTheme : globalDarkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", minHeight: 0 }}>
          <Navbar toggleLightMode={toggleLightModeHandler} />
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
