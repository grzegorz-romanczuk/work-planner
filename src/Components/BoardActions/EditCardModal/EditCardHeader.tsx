import React from "react";

import { Box } from "@mui/system";
import { EditTitleField } from "./Fields/EditTitleField";
import { DialogTitle } from "@mui/material";
import { reducerState, reducerAction } from "../../Board/BoardCard";

type EditCardHeaderProps = {
  taskState: reducerState;
  taskDispatch: React.Dispatch<reducerAction>;
};

export const EditCardHeader: React.FC<EditCardHeaderProps> = (props) => {
  const { taskState, taskDispatch } = props;
  return (
    <DialogTitle
      sx={{
        display: "flex",
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
      >
        <EditTitleField
          taskTitle={taskState.title}
          taskDispatch={taskDispatch}
        />
      </Box>
    </DialogTitle>
  );
};
