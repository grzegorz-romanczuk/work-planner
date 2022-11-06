import { Help, Schedule } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  Popover,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";
import { format24Time } from "../../../../Utils/dateFormatter";
import { reducerAction } from "../../../Board/BoardCard";
import { EditTimeField } from "./EditTimeField";

type EditScheduleFieldProps = {
  taskSchedule?: { from?: string | null; to?: string | null };
  taskDispatch: React.Dispatch<reducerAction>;
};

export const EditScheduleField: React.FC<EditScheduleFieldProps> = (props) => {
  const { taskSchedule, taskDispatch } = props;
  const [timeFrom, setTimeFrom] = useState(
    taskSchedule?.from ? new Date(taskSchedule.from) : null
  );
  const [timeTo, setTimeTo] = useState(
    taskSchedule?.to ? new Date(taskSchedule.to) : null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState({ from: false, to: false });
  const [isPopover, setIsPopover] = useState(false);

  const iconRef = useRef(null);

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
    const format = formatSchedule();

    format !== schedule && setSchedule(format);
    const other = format === "None" ? { isAlarm: false } : {};

    taskDispatch({
      type: "edit",
      result: {
        schedule: { from: timeFrom?.toString(), to: timeTo?.toString() },
        ...other,
      },
    });

    closeHandler();
  };

  const onResetHandler = () => {
    setTimeFrom(null);
    setTimeTo(null);
  };

  const timeFromChangeHandler = (value: Date | null) => {
    setTimeFrom(value);
    console.log(typeof value, value);
  };

  const timeToChangeHandler = (value: Date | null) => {
    setTimeTo(value);
  };

  const openHandler = () => {
    setTimeFrom(taskSchedule?.from ? new Date(taskSchedule.from) : null);
    setTimeTo(taskSchedule?.to ? new Date(taskSchedule.to) : null);
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  const popover = (
    <React.Fragment>
      <IconButton
        onClick={() => {
          setIsPopover(true);
        }}
        ref={iconRef}
        size="small"
      >
        <Help fontSize="small" />
      </IconButton>
      <Popover
        open={isPopover}
        anchorEl={iconRef.current}
        onClose={() => {
          setIsPopover(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Typography sx={{ p: 2 }}>
          {`Set the start time. `}
          <em>{`Optionally: Set the end time to set the schedule.`}</em>
        </Typography>
      </Popover>
    </React.Fragment>
  );

  const ScheduleDialog = (
    <Dialog open={isOpen} onClose={closeHandler}>
      <DialogTitle>Set time</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
        }}
        dividers
      >
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
          errorHandler={(reason: string | null, value: Date | null) => {
            setIsError({ ...isError, from: reason ? true : false });
          }}
        />
        <EditTimeField
          time={timeFrom ? timeTo : null}
          changeHandler={timeToChangeHandler}
          label="End"
          minTime={timeFrom}
          disabled={timeFrom ? false : true}
          showIcon
          isClear
          clearHandler={() => {
            setTimeTo(null);
          }}
          errorHandler={(reason: string | null, value: Date | null) => {
            setIsError({ ...isError, to: reason ? true : false });
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
        <Button
          onClick={onSubmitHandler}
          sx={{ fontWeight: "bold" }}
          disabled={isError.from || isError.to}
        >
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
