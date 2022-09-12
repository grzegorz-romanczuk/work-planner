import React from "react";
import {
  CardActions,
  Card,
  CardContent,
  CardHeader,
  Grid,
  GridProps,
  useTheme,
  alpha,
} from "@mui/material";
import { Stack, SxProps } from "@mui/system";
import { AddCardField } from "../BoardActions/AddCardField/AddCardField";

export type BoardColumnProps = GridProps &
  SxProps & {
    title?: React.ReactNode;
    subheader?: React.ReactNode;
    children?: React.ReactNode;
    raised?: boolean;
    borderRadius?: number;
    padding?: number | string;
    headerColor?: string;
    addTask: (title: string, headerColor?: string | undefined) => void;
  };

const defaultProps: Partial<BoardColumnProps> = {
  minWidth: { xs: "100%", sm: "20em" },
  maxWidth: { xs: "100%", sm: "20em", xl: "35em" },
  maxHeight: "100%",
  raised: true,
  borderRadius: 1,
  height: "100%",
  padding: 1,
  direction: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  spacing: { xs: 1, sm: 2 },
};

export const BoardColumn: React.FC<BoardColumnProps> = (props) => {
  const {
    title,
    subheader,
    children,
    minWidth,
    maxWidth,
    maxHeight,
    raised,
    borderRadius,
    headerColor,
    height,
    padding,
    direction,
    spacing,
    id,
    addTask,
  } = {
    ...defaultProps,
    ...props,
  };
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  return (
    <Grid container sx={{ height, minWidth, maxWidth }} id={id}>
      <Grid item xs={12} sx={{ height }}>
        <Card
          sx={{
            maxHeight,
            borderRadius,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "board.column",
          }}
          raised={raised}
        >
          <CardHeader
            title={title}
            subheader={subheader}
            sx={{
              textAlign: "center",
              backgroundColor: headerColor
                ? alpha(headerColor, isDarkMode ? 0.4 : 0.8)
                : undefined,
              padding,
            }}
          />
          <CardContent sx={{ overflow: "auto", padding }}>
            <Stack direction={direction} spacing={spacing}>
              {children}
            </Stack>
          </CardContent>
          <CardActions>
            <AddCardField addTask={addTask} />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
