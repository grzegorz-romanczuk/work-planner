import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SxProps, StackProps } from "@mui/system";
import { SearchField } from "../SearchField/SearchField";
import { NavbarLogo } from "./NavbarLogo";
import { DarkModeSwitch } from "../DarkModeSwitch/DarkModeSwitch";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
export type NavbarProps = SxProps &
  StackProps & {
    toggleDarkMode?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isDarkMode?: boolean;
  };

const defaultProps: NavbarProps = {
  height: { xs: 48 },
  minHeight: { xs: 48 },
};

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { height, minHeight, toggleDarkMode, isDarkMode } = {
    ...defaultProps,
    ...props,
  };

  const theme = useTheme();
  const smMediaQuery = useMediaQuery("(min-width: 600px)");

  return (
    <React.Fragment>
      <AppBar color="secondary" position="sticky" sx={{ height }}>
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
              [theme.breakpoints.up("lg")]: {
                minWidth: 224,
              },
            }}
          >
            <NavbarLogo />
          </Box>

          {smMediaQuery ? (
            <React.Fragment>
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
                  [theme.breakpoints.up("lg")]: {
                    minWidth: 224,
                  },
                  justifySelf: "flex-end",
                  justifyContent: "flex-end",
                  alignContent: "center",
                }}
              >
                <Typography
                  variant="themeText"
                  sx={{ height: "fit-content", my: "auto", mx: 1 }}
                >
                  {smMediaQuery && (isDarkMode ? "DARKMODE" : "LIGHTMODE")}
                </Typography>
                <DarkModeSwitch
                  defaultChecked={!isDarkMode}
                  onChange={toggleDarkMode}
                />
              </Box>
            </React.Fragment>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                justifySelf: "flex-end",
                justifyContent: "flex-end",
                alignContent: "center",
              }}
            >
              <DropdownMenu />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
