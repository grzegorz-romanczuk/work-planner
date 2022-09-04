import * as React from "react";
import { AppBar, Toolbar } from "@mui/material";

export type NavbarProps = {};

export const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar></Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
