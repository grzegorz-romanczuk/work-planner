import React from "react";
import { Box } from "@mui/system";
import { DialogContent } from "@mui/material";
import { reducerState, reducerAction } from "../../Board/BoardCard";
import { EditDescriptionField } from "./Fields/EditDescriptionField";
import { EditStateField } from "./Fields/EditStateField";
import { EditDateField } from "./Fields/EditDateField";
import { EditColorField } from "./Fields/EditColorField";
import { EditTimeField } from "./Fields/EditTimeField";
import { EditScheduleField } from "./Fields/EditScheduleField";

type EditCardContentProps = {
  taskState: reducerState;
  taskDispatch: React.Dispatch<reducerAction>;
};

export const EditCardContent: React.FC<EditCardContentProps> = (props) => {
  const { taskState, taskDispatch } = props;
  return (
    <DialogContent
      dividers
      sx={{
        display: "flex",
        px: 2,
        position: "relative",
        flexDirection: { xs: "column", sm: "row" },
        rowGap: 2,
        columnGap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          flex: { xs: 0, sm: 11 },
        }}
      >
        <EditDescriptionField
          taskDescription={taskState.description}
          taskDispatch={taskDispatch}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          flex: { xs: 0, sm: 5 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            columnGap: 1,
            rowGap: 2,
          }}
        >
          <EditDateField
            taskDate={taskState.date}
            taskDispatch={taskDispatch}
          />
          <EditScheduleField
            taskSchedule={taskState.schedule}
            taskDispatch={taskDispatch}
          />
          <EditStateField state={taskState.state} taskDispatch={taskDispatch} />
          <EditColorField
            taskColor={taskState.headerColor}
            taskDispatch={taskDispatch}
          />
        </Box>
      </Box>
    </DialogContent>
  );
};
