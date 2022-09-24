import { Schedule } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { format24Time } from "../../../../Utils/dateFormatter";
import { reducerAction } from "../../../Board/BoardCard";
import { EditTimeField } from "./EditTimeField";

type EditScheduleFieldProps = {
  taskSchedule?: { from?: string | null; to?: string | null };
  taskDispatch: React.Dispatch<reducerAction>;
};

export const EditScheduleField: React.FC<EditScheduleFieldProps> = (props) => {
  const { taskSchedule, taskDispatch } = props;
  const [timeFrom, setTimeFrom] = useState(taskSchedule?.from || null);
  const [timeTo, setTimeTo] = useState(taskSchedule?.to || null);
  const [isOpen, setIsOpen] = useState(false);

  const formatSchedule = () => {
    return timeFrom && timeTo
      ? `${format24Time(new Date(timeFrom))} - ${format24Time(
          new Date(timeTo)
        )}`
      : timeFrom
      ? `${format24Time(new Date(timeFrom))}`
      : "None";
  };

  const [schedule, setSchedule] = useState(formatSchedule() || "None");

  const onSubmitHandler = () => {
    const result = formatSchedule();
    result !== schedule && setSchedule(result);
    taskDispatch({
      type: "edit",
      result: { schedule: { from: timeFrom, to: timeTo } },
    });
    closeHandler();
  };

  const onResetHandler = () => {
    setTimeFrom(null);
    setTimeTo(null);
  };

  const timeFromChangeHandler = (value: string | null) => {
    setTimeFrom(value);
  };

  const timeToChangeHandler = (value: string | null) => {
    setTimeTo(value);
  };

  const openHandler = () => {
    setTimeFrom(taskSchedule?.from || null);
    setTimeTo(taskSchedule?.to || null);
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  const ScheduleDialog = (
    <Dialog open={isOpen} onClose={closeHandler} fullWidth>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
        }}
      >
        <Typography variant="h3">Select time</Typography>
        <EditTimeField
          time={timeFrom}
          changeHandler={timeFromChangeHandler}
          label="Start"
          maxTime={timeTo}
          showIcon
          isClear
          clearHandler={() => {
            setTimeFrom(null);
          }}
        />
        <EditTimeField
          time={timeFrom ? timeTo : null}
          changeHandler={timeToChangeHandler}
          label="Finish"
          minTime={timeFrom}
          disabled={timeFrom ? false : true}
          showIcon
          isClear
          clearHandler={() => {
            setTimeTo(null);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onResetHandler} sx={{ fontWeight: "bold" }}>
          Reset
        </Button>
        <Button onClick={closeHandler} sx={{ fontWeight: "bold" }}>
          Cancel
        </Button>
        <Button onClick={onSubmitHandler} sx={{ fontWeight: "bold" }}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );

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
      <Schedule sx={{ width: 48 }} />
      <FormControl fullWidth size="small" onClick={openHandler}>
        <InputLabel id="schedule-label">Schedule</InputLabel>
        <OutlinedInput
          value={schedule}
          id="schedule"
          label="Schedule"
          aria-describedby="schedule-label"
          readOnly
        />
      </FormControl>
      {ScheduleDialog}
    </Box>
  );
};
