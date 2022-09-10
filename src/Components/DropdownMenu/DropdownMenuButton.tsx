import { MenuRounded } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import React from "react";
type DropdownMenuButtonProps = {
  onClick?: () => void;
};

export const DropdownMenuButton: React.FC<DropdownMenuButtonProps> = (
  props
) => {
  const { onClick } = props;
  const theme = useTheme();
  return (
    <IconButton
      sx={{
        width: 40,
        height: 40,
        minWidth: 32,
        p: 1,
        color: theme.palette.secondary.contrastText,
      }}
      onClick={onClick}
    >
      <MenuRounded />
    </IconButton>
  );
};
