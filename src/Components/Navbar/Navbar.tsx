import * as React from "react";
import {
  AppBar,
  Box,
  ButtonBase,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { SxProps, StackProps } from "@mui/system";
import { Search, Today } from "@mui/icons-material";
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
          }}
        >
          <Box
            sx={{
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
              <ButtonBase sx={{ height: 40, px: 1, borderRadius: 1 }}>
                <Today fontSize="large" />
                <Typography variant="h4">Workplanize</Typography>
              </ButtonBase>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                minWidth: 0,
              }}
            >
              <ButtonBase
                sx={{
                  px: 1,
                  borderRadius: 1,
                  height: 40,
                  ml: { xs: 1, sm: 2, md: 3 },
                }}
              >
                <Typography variant="h3">Today</Typography>
              </ButtonBase>
              <ButtonBase
                sx={{
                  px: 1,
                  borderRadius: 1,
                  height: 40,
                  ml: { xs: 1, sm: 2 },
                }}
              >
                <Typography variant="h3">This week</Typography>
              </ButtonBase>
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
              <TextField
                color="secondary"
                placeholder="Search"
                type="search"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  autoComplete: "off",
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: "primary.light",
                  borderRadius: 5,
                  px: 2,
                  boxShadow: "inset 0 0 5px #000000",
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
