import React, { useState } from "react";
import { Box } from "@mui/system";
import { Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CalendarClosedModal } from "./CalendarClosedModal";
import { Calendar } from "./Calendar";
import { useSearchParams, createSearchParams } from "react-router-dom";
import { formatCalendarDate, formatUrlDate } from "../../Utils/dateFormatter";

export const CalendarModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const date = searchParams.get("date") || formatUrlDate(new Date());
  const theme = useTheme();
  const lgMediaQuery = useMediaQuery(theme.breakpoints.up("lg"));
  const [isOpen, setIsOpen] = useState(lgMediaQuery ? true : false);

  const onChangeHandler = (value: string) => {
    const date = new Date(value);
    setSearchParams(createSearchParams({ date: formatUrlDate(date) }));
  };

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const bgColor =
    theme.palette.mode === "dark"
      ? theme.palette.secondary.light
      : theme.palette.secondary.dark;

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          backgroundColor: bgColor,
          visibility: isOpen ? "visible" : "hidden",
          width: isOpen ? { xs: "100%", sm: "320px" } : 0,
          height: "100%",
          transition: "width 0.5s, visibility 0.5s",
          position: { xs: "fixed", sm: "sticky" },
          zIndex: 2,
          boxShadow: "0 0 5px 0 #000000",
          overflow: "clip",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "clip",
            width: { xs: "100%", sm: "320px" },
          }}
        >
          <Typography
            variant="calendarDate"
            sx={{ width: "auto", textAlign: "center" }}
          >
            {formatCalendarDate(new Date(date))}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "clip",
            width: { xs: "100%", sm: "320px" },
          }}
        >
          <Divider sx={{ my: 1 }} />
        </Box>
        <Box>
          <Calendar date={date} onChange={onChangeHandler} />
        </Box>
      </Box>
      <CalendarClosedModal isOpen={isOpen} onClick={openHandler} />
    </React.Fragment>
  );
};
