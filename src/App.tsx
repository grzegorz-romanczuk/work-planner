import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import React, { useState } from "react";

import { BoardContainer } from "./Components/Board/BoardContainer";
import { dateFormatter } from "./Utils/dateFormatter";
import { globalLightTheme, globalDarkTheme } from "./Themes/globalTheme";
import { Navbar } from "./Components/Navbar/Navbar";
import { CalendarModal } from "./Components/Calendar/CalendarModal";

function App() {
  const date = dateFormatter(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkModeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsDarkMode(!event.target.checked);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
            sx={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              minHeight: 0,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                minWidth: 0,
              }}
            >
              <CalendarModal
                toggleDarkMode={toggleDarkModeHandler}
                isDarkMode={isDarkMode}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                minWidth: 0,
              }}
            >
              <BoardContainer />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
