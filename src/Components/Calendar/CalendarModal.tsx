import React from "react";
import { Box } from "@mui/system";
import { Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CalendarClosedModal } from "./CalendarClosedModal";
import { Calendar } from "./Calendar";
import { useSearchParams, createSearchParams } from "react-router-dom";
import { formatCalendarDate, formatUrlDate } from "../../Utils/dateFormatter";
import { DarkModeSwitch } from "../DarkModeSwitch/DarkModeSwitch";
import { SearchField } from "../SearchField/SearchField";

type CalendarModalProps = {
  isDarkMode?: boolean;
  toggleDarkMode?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleCalendar?: () => void;
  calendarExpanded?: boolean;
};

export const CalendarModal: React.FC<CalendarModalProps> = (props) => {
  const { isDarkMode, toggleDarkMode, toggleCalendar, calendarExpanded } =
    props;

  const [searchParams, setSearchParams] = useSearchParams();
  const date = searchParams.get("date") || formatUrlDate(new Date());
  const theme = useTheme();

  const transformMediaQuery = useMediaQuery(
    theme.breakpoints.between("sm", 768)
  );

  const scrollMediaQuery = useMediaQuery("(max-height: 560px)");
  const smallComponentsMediaQuery = useMediaQuery("(min-width: 768px)");

  const onChangeHandler = (value: Date | null) => {
    if (value) {
      setSearchParams(createSearchParams({ date: formatUrlDate(value) }));
    }
  };

  const bgColor =
    theme.palette.mode === "dark"
      ? theme.palette.secondary.light
      : theme.palette.secondary.dark;

  const sxBoxProps = {
    display: "flex",
    flexDirection: "column",
    overflow: "clip",
    width: { xs: "100vw", sm: "320px" },
    minWidth: "320px",
    minHeight: "fit-content",
    justifyContent: "center",
    mx: "auto",
  };

  const divider = (
    <Box sx={{ ...sxBoxProps, minHeight: 17 }}>
      <Divider sx={{ my: 1 }} />
    </Box>
  );

  const mobileMenuComponents = (
    <React.Fragment>
      <Box
        sx={{
          ...sxBoxProps,
          flexDirection: "row",
          mt: 1,
          minHeight: 28,
        }}
      >
        <Typography
          variant="themeText"
          sx={{ justifyContent: "center", my: "auto", mx: 1 }}
        >
          {isDarkMode ? "DARKMODE" : "LIGHTMODE"}
        </Typography>
        <DarkModeSwitch checked={!isDarkMode} onChange={toggleDarkMode} />
      </Box>
      {divider}
      {/* <Box sx={{ ...sxBoxProps, minHeight: 32 }}>
        <SearchField sxProps={{ width: "auto" }} />
      </Box>
      {divider} */}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "block",
          minHeight: 0,
          maxHeight: smallComponentsMediaQuery
            ? "100%"
            : calendarExpanded
            ? { xs: "100%", sm: "100vh" }
            : 0,
          backgroundColor: bgColor,
          visibility: calendarExpanded ? "visible" : "hidden",
          width: smallComponentsMediaQuery
            ? calendarExpanded
              ? { xs: "100%", sm: "320px" }
              : 0
            : { xs: "100%", sm: "320px" },
          height: smallComponentsMediaQuery
            ? "100%"
            : { xs: "100%", sm: "fit-content" },
          transition: "width 0.3s, visibility 0.3s, max-height 0.3s",
          position: smallComponentsMediaQuery ? "sticky" : "fixed",
          zIndex: 2,
          boxShadow: "0 0 5px 0 #000000",
          overflowY: scrollMediaQuery ? "auto" : "hidden",
          overflowX: "clip",
          left: transformMediaQuery ? "100%" : 0,
          translate: transformMediaQuery ? "-100% 0" : "0 0",
        }}
      >
        {!smallComponentsMediaQuery && mobileMenuComponents}
        <Box sx={{ ...sxBoxProps, minHeight: 96 }}>
          <Typography
            variant="calendarDate"
            sx={{ width: "auto", textAlign: "center" }}
          >
            {formatCalendarDate(new Date(date))}
          </Typography>
        </Box>
        {divider}
        <Box sx={{ ...sxBoxProps }}>
          <Calendar date={date} onChange={onChangeHandler} />
        </Box>
      </Box>
      <CalendarClosedModal isOpen={calendarExpanded} onClick={toggleCalendar} />
    </React.Fragment>
  );
};
