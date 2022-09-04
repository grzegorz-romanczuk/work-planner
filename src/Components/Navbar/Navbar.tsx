import * as React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { SxProps, StackProps } from "@mui/system";
export type NavbarProps = SxProps & StackProps & {};

const defaultProps: NavbarProps = {
  height: { xs: 48 },
  minHeight: { xs: 48 },
};

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { height, minHeight } = defaultProps;

  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ height }}>
        <Toolbar sx={{ height: "100%", minHeight }}></Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
