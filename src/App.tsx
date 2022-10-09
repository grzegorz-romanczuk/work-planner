import {
  Box,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import React, { useState, useEffect } from "react";

import { BoardContainer } from "./Components/Board/BoardContainer";
import { globalLightTheme, globalDarkTheme } from "./Themes/globalTheme";
import { Navbar } from "./Components/Navbar/Navbar";
import { CalendarModal } from "./Components/Calendar/CalendarModal";

function App() {
  const theme = useTheme();
  const lgMediaQuery = useMediaQuery(theme.breakpoints.up("lg"));
  const [calendarExpanded, setCalendarExpanded] = useState(
    lgMediaQuery ? true : false
  );
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkModeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsDarkMode(!event.target.checked);
  };

  const toggleCalendar = () => {
    setCalendarExpanded(!calendarExpanded);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--viewport-height",
      `${visualViewport?.height}px`
    );
    visualViewport?.addEventListener("resize", () => {
      document.documentElement.style.setProperty(
        "--viewport-height",
        `${visualViewport?.height}px`
      );
    });
    return () => {
      visualViewport?.removeEventListener("resize", () => {
        document.documentElement.style.setProperty(
          "--viewport-height",
          `${visualViewport?.height}px`
        );
      });
    };
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={isDarkMode ? globalDarkTheme : globalLightTheme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "var(--viewport-height)",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", minHeight: 0 }}>
            <Navbar
              toggleDarkMode={toggleDarkModeHandler}
              isDarkMode={isDarkMode}
              toggleCalendar={toggleCalendar}
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
                toggleCalendar={toggleCalendar}
                calendarExpanded={calendarExpanded}
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
