import React from "react";
import { Card, CardContent, CardHeader, StackProps } from "@mui/material";
import { Stack, SxProps } from "@mui/system";

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
  raised: true,
  borderRadius: 1,
  maxHeight: "80%",
  padding: 1,
  direction: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  spacing: { xs: 2, sm: 3 },
};

export const BoardColumn: React.FC<BoardColumnProps> = (props) => {
  const {
    title,
    subheader,
    children,
    minWidth,
    maxWidth,
    raised,
    borderRadius,
    headerColor,
    maxHeight,
    padding,
    direction,
    justifyContent,
    alignItems,
    spacing,
  } = {
    ...defaultProps,
    ...props,
  };
  return (
    <Card
      sx={{
        minWidth,
        maxWidth,
        borderRadius,
        maxHeight,
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
      <CardContent sx={{ overflow: "auto" }}>
        <Stack direction={direction} spacing={spacing}>
          {children}
        </Stack>
      </CardContent>
    </Card>
  );
};
