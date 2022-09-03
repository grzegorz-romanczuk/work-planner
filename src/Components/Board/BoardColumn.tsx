import React from "react";
import {
  CardActions,
  Card,
  CardContent,
  CardHeader,
  Grid,
  StackProps,
} from "@mui/material";
import { Stack, SxProps } from "@mui/system";
import { AddCardField } from "../BoardActions/AddCardField/AddCardField";

export type BoardColumnProps = StackProps &
  SxProps & {
    title?: React.ReactNode;
    subheader?: React.ReactNode;
    children?: React.ReactNode;
    raised?: boolean;
    borderRadius?: number;
    padding?: number | string;
    headerColor?: string;
  };

const defaultProps: Partial<BoardColumnProps> = {
  minWidth: { xs: "100%", sm: "20em" },
  maxWidth: 350,
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
    justifyContent,
    alignItems,
    spacing,
    id,
  } = {
    ...defaultProps,
    ...props,
  };

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
              backgroundColor: headerColor,
              padding,
            }}
          />
          <CardContent sx={{ overflow: "auto", padding }}>
            <Stack direction={direction} spacing={spacing}>
              {children}
            </Stack>
          </CardContent>
          <CardActions>
            <AddCardField />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
