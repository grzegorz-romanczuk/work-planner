import { Box, useMediaQuery, alpha, useTheme } from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
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
  const smMediaQuery = useMediaQuery("(min-width: 768px)");

  const bgColor =
    theme.palette.mode === "dark"
      ? theme.palette.secondary.light
      : theme.palette.secondary.dark;
  return smMediaQuery ? (
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
  ) : null;
};
