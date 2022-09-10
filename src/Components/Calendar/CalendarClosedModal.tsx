import { Box, useMediaQuery, alpha, useTheme, IconButton } from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import EventNoteIcon from "@mui/icons-material/EventNote";
import React from "react";

type CalendarClosedModalProps = {
  onClick?: () => void;
  isOpen?: boolean;
};

export const CalendarClosedModal: React.FC<CalendarClosedModalProps> = (
  props
) => {
  const { onClick, isOpen } = props;

  const theme = useTheme();
  const lgMediaQuery = useMediaQuery(theme.breakpoints.up("lg"));

  const bgColor =
    theme.palette.mode === "dark"
      ? theme.palette.secondary.light
      : theme.palette.secondary.dark;
  return lgMediaQuery ? (
    <Box
      sx={{
        width: 25,
        height: "100%",
        backgroundColor: alpha(bgColor, 0.5),
        borderRight: `2px solid ${alpha(bgColor, 0.5)}`,
        zIndex: 1,
        position: "relative",
        "&:hover": {
          backgroundColor: theme.palette.secondary.main,
          cursor: "pointer",
        },
      }}
      onClick={onClick}
    >
      <ChevronRightRoundedIcon
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          transform: isOpen ? "rotate(180deg)" : undefined,
          transition: "transform 0.5s",
        }}
        fontSize="large"
      />{" "}
    </Box>
  ) : (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "0%",
        translate: "15% 125%",
        borderRadius: "50%",
        height: "fit-content",
        width: "fit-content",
        boxShadow: "0 0 5px 0 #000000",
        backgroundColor: theme.palette.primary.main,
        zIndex: 3,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
        "&:click": {
          backgroundColor: theme.palette.primary.light,
        },
      }}
    >
      <EventNoteIcon
        sx={{
          color: theme.palette.getContrastText(theme.palette.primary.main),
          fontSize: "28px",
        }}
      />
    </IconButton>
  );
};
