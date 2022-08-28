import { Stack, StackProps } from "@mui/material";
import React from "react";

export type BoardProps = StackProps & { children?: Array<React.ReactNode> };

const defaultProps: Partial<BoardProps> = {
  direction: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  spacing: { xs: 2, sm: 3 },
  minWidth: "95vw",
  height: "90vh",
  margin: 1,
};

export const Board: React.FC<BoardProps> = (props) => {
  const {
    direction,
    justifyContent,
    alignItems,
    spacing,
    children,
    minWidth,
    height,
    margin,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <Stack
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      spacing={spacing}
      minWidth={minWidth}
      margin={margin}
      height={height}
      display="flex"
    >
      {children?.map((item, index) => {
        return item;
      })}
    </Stack>
  );
};
