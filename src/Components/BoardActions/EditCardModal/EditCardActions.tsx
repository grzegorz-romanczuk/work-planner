import React from "react";
import { Box } from "@mui/system";
import { DialogActions } from "@mui/material";
import { reducerState, reducerAction } from "../../Board/BoardCard";

type EditCardActionsProps = {
  taskState: reducerState;
  taskDispatch: React.Dispatch<reducerAction>;
};

export const EditCardActions: React.FC<EditCardActionsProps> = (props) => {
  const { taskState, taskDispatch } = props;
  return (
    <DialogActions
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        mr: 6,
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
        }}
      ></Box>
    </DialogActions>
  );
};
