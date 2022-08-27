import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";

export type BoardColumnProps = {
  title?: React.ReactNode;
  subheader?: React.ReactNode;
  children?: React.ReactNode;
  minWidth?: number | string;
  maxWidth?: number | string;
};

const defaultProps = {
  minWidth: { xs: "100%", sm: 350 },
  maxWidth: 350,
};

export const BoardColumn: React.FC<BoardColumnProps> = (props) => {
  const { title, subheader, children, minWidth, maxWidth } = {
    ...defaultProps,
    ...props,
  };
  return (
    <Card sx={{ minWidth, maxWidth }}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
