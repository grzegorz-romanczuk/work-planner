import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";

export const KanbanColumn = ({ title, subheader, children, props }) => {
  return (
    <Card>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
