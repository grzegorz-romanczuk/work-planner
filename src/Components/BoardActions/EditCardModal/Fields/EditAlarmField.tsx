import { Alarm } from "@mui/icons-material";
import { Box, FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { reducerAction } from "../../../Board/BoardCard";

type EditAlarmFieldProps = {
  isAlarm?: boolean;
  isSchedule: boolean;
  taskDispatch: React.Dispatch<reducerAction>;
};

export const EditAlarmField: React.FC<EditAlarmFieldProps> = (props) => {
  const { isAlarm, isSchedule, taskDispatch } = props;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    taskDispatch({
      type: "edit",
      result: { isAlarm: event.target.checked },
    });
  };

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
      <Alarm sx={{ width: 48 }} />
      <FormControlLabel
        label="Alarm"
        control={
          <Switch
            id="alarm-switch"
            checked={isAlarm || false}
            onChange={onChangeHandler}
            disabled={!isSchedule}
          />
        }
      />
    </Box>
  );
};
