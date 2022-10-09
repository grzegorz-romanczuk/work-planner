import { Stack, StackProps } from "@mui/material";
import React from "react";

export type BoardProps = StackProps & { children?: Array<React.ReactNode> };

const defaultProps: Partial<BoardProps> = {
  direction: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  spacing: { xs: 2, sm: 3 },
  minWidth: 0,
  width: { xs: "100%", lg: "fit-content" },
  height: "100%",
  maxHeight: "100%",
  mx: { sm: "auto" },
  px: { xs: 1, sm: 4 },
  py: { xs: 1, sm: 2 },
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
    maxHeight,
    width,
    px,
    py,
    mx,
    id,
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
      width={width}
      px={px}
      py={py}
      mx={mx}
      height={height}
      display="flex"
      id={id}
      overflow="auto"
      maxHeight={maxHeight}
      sx={{ scrollSnapType: "x mandatory" }}
    >
      {children?.map((item, index) => {
        return item;
      })}
    </Stack>
  );
};
