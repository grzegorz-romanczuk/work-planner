import {
  CheckCircleOutlined,
  CircleOutlined,
  PendingOutlined,
} from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { State } from "../../../../Utils/types";
import { reducerAction } from "../../../Board/BoardCard";

type EditStateFieldProps = {
  state: State;
  taskDispatch: React.Dispatch<reducerAction>;
};

export const EditStateField: React.FC<EditStateFieldProps> = (props) => {
  const { state, taskDispatch } = props;

  const onChangeHandler = (event: SelectChangeEvent) => {
    taskDispatch({
      type: "edit",
      result: { state: event.target.value as State },
    });
  };

  const todoIcon = <CircleOutlined sx={{ width: 48 }} />;
  const inprogressIcon = <PendingOutlined sx={{ width: 48 }} />;
  const doneIcon = <CheckCircleOutlined sx={{ width: 48 }} />;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
      }}
    >
      {state === "todo" && todoIcon}
      {state === "progress" && inprogressIcon}
      {state === "done" && doneIcon}
      <FormControl fullWidth>
        <InputLabel id="state-label">Status</InputLabel>
        <Select
          value={state}
          onChange={onChangeHandler}
          label="Status"
          labelId="state-label"
          size="small"
          fullWidth
        >
          <MenuItem value="todo">To do</MenuItem>
          <MenuItem value="progress">In progress</MenuItem>
          <MenuItem value="done">Done</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
