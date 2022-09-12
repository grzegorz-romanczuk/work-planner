import { Clear } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

type RemoveCardButtonProps = { onClick?: (event: React.MouseEvent) => void };

export const RemoveCardButton: React.FC<RemoveCardButtonProps> = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      size="small"
      onClick={onClick}
      sx={{
        position: "absolute",
        top: 0,
        left: "100%",
        translate: "-115% 15%",
        backgroundColor: "board.hoverCard",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))",
        borderRadius: 1,
        "&:hover": {
          backgroundColor: "board.hoverbuttonBackground",
        },
        "&:focus": {
          backgroundColor: "board.focus     buttonBackground",
        },
      }}
    >
      <Clear color="primary" fontSize="inherit" />
    </IconButton>
  );
};
