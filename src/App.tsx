import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import React, { useState } from "react";

import { BoardContainer } from "./Components/Board/BoardContainer";
import { dateFormatter } from "./Utils/dateFormatter";
import { globalLightTheme, globalDarkTheme } from "./Themes/globalTheme";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  const date = dateFormatter(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkModeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsDarkMode(!event.target.checked);
  };

  return (
    <ThemeProvider theme={isDarkMode ? globalDarkTheme : globalLightTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", minHeight: 0 }}>
          <Navbar
            toggleDarkMode={toggleDarkModeHandler}
            isDarkMode={isDarkMode}
          />
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
