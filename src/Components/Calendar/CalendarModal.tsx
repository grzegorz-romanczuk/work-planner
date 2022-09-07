import React, { useState } from "react";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material";
import { CalendarClosedModal } from "./CalendarClosedModal";
import { Calendar } from "./Calendar";

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
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
        <Calendar />
      </Box>
      <CalendarClosedModal isOpen={isOpen} onClick={openHandler} />
    </React.Fragment>
  );
};
