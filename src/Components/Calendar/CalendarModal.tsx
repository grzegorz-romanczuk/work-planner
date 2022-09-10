import React, { useState } from "react";
import { Box, Container } from "@mui/system";
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
};

export const CalendarModal: React.FC<CalendarModalProps> = (props) => {
  const { isDarkMode, toggleDarkMode } = props;

  const [searchParams, setSearchParams] = useSearchParams();
  const date = searchParams.get("date") || formatUrlDate(new Date());
  const theme = useTheme();
  const lgMediaQuery = useMediaQuery(theme.breakpoints.up("lg"));
  const smMediaQuery = useMediaQuery(theme.breakpoints.up("sm"));
  const smallComponentsMediaQuery = useMediaQuery("(min-width: 600px)");
  const [isOpen, setIsOpen] = useState(lgMediaQuery ? true : false);

  const onChangeHandler = (value: Date | null) => {
    if (value) {
      setSearchParams(createSearchParams({ date: formatUrlDate(value) }));
    }
  };

  const openHandler = () => {
    setIsOpen(!isOpen);
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
    height: "fit-content",
    mx: "auto",
  };

  const divider = (
    <Box sx={{ ...sxBoxProps }}>
      <Divider sx={{ my: 1 }} />
    </Box>
  );

  const mobileMenuComponents = (
    <React.Fragment>
      <Box
        sx={{
          ...sxBoxProps,
          flexDirection: "row",
          justifyContent: "center",
          mt: 1,
        }}
      >
        <Typography
          variant="themeText"
          sx={{ height: "fit-content", my: "auto", mx: 1 }}
        >
          {isDarkMode ? "DARKMODE" : "LIGHTMODE"}
        </Typography>
        <DarkModeSwitch
          defaultChecked={!isDarkMode}
          onChange={toggleDarkMode}
        />
      </Box>
      {divider}
      <Box sx={{ ...sxBoxProps }}>
        <SearchField sxProps={{ width: "auto" }} />
      </Box>
      {divider}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          backgroundColor: bgColor,
          visibility: isOpen ? "visible" : "hidden",
          width: smMediaQuery
            ? isOpen
              ? { xs: "100%", sm: "320px" }
              : 0
            : { xs: "100%", sm: "320px" },
          height: smMediaQuery ? "100%" : isOpen ? { xs: "100%" } : 0,
          transition: "width 0.5s, visibility 0.5s, height 0.5s",
          position: { xs: "fixed", sm: "sticky" },
          zIndex: 2,
          boxShadow: "0 0 5px 0 #000000",
          overflow: "clip",
        }}
      >
        {!smallComponentsMediaQuery && mobileMenuComponents}
        <Box sx={{ ...sxBoxProps }}>
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
      <CalendarClosedModal isOpen={isOpen} onClick={openHandler} />
    </React.Fragment>
  );
};
