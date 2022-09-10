import { MenuRounded } from "@mui/icons-material";
import { IconButton, SvgIcon, useTheme } from "@mui/material";
import React, { useState } from "react";
type DropdownMenuButtonProps = {
  isOpen?: boolean;
  onClick?: () => void;
};

export const DropdownMenuButton: React.FC<DropdownMenuButtonProps> = (
  props
) => {
  const { isOpen, onClick } = props;
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
    >
      <MenuRounded />
    </IconButton>
  );
};
