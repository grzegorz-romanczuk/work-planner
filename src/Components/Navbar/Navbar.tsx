import * as React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { SxProps, StackProps } from "@mui/system";
import { SearchField } from "../SearchField/SearchField";
import { NavbarLogo } from "./NavbarLogo";
import { DarkModeSwitch } from "../DarkModeSwitch/DarkModeSwitch";
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
        <Toolbar
          sx={{
            height: "100%",
            minHeight,
            px: { xs: 1, sm: 2, md: 3 },
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              minWidth: 0,
            }}
          >
            <NavbarLogo />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              minWidth: 0,
              justifySelf: "center",
              justifyContent: "center",
            }}
          >
            <SearchField />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              minWidth: 0,
              justifySelf: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <DarkModeSwitch />
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
