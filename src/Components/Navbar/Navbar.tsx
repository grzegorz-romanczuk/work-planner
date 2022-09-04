import * as React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { SxProps, StackProps } from "@mui/system";
export type NavbarProps = SxProps & StackProps & {};

const defaultProps: NavbarProps = {
  height: { xs: 56, md: 48 },
};

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { height } = defaultProps;

  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ height }}>
        <Toolbar></Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
