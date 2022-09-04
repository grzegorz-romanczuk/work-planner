import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { SxProps, StackProps } from "@mui/system";
import { Today } from "@mui/icons-material";
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
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Today fontSize="large" />
            <Typography variant="h4">Work Planner</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
