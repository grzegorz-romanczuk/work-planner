import { Clear, Schedule } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers-pro";
import "./EditTimeField.css";
import React from "react";

type EditTimeFieldProps = {
  time: string | null;
  changeHandler: (value: string | null) => void;
  label?: string;
  showIcon?: boolean;
  maxTime?: string | null;
  minTime?: string | null;
  disabled?: boolean;
  isClear?: boolean;
  clearHandler?: () => void;
  errorHandler?: (reason: string | null, value: string | null) => void;
};

export const EditTimeField: React.FC<EditTimeFieldProps> = (props) => {
  const {
    time,
    changeHandler,
    label,
    showIcon,
    maxTime,
    minTime,
    disabled,
    isClear,
    clearHandler,
    errorHandler,
  } = props;

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
      {showIcon && <Schedule sx={{ width: 48 }} />}{" "}
      <TimePicker
        ampm={false}
        openTo="hours"
        views={["hours", "minutes"]}
        value={time}
        showToolbar
        onChange={changeHandler}
        onError={errorHandler}
        label={label}
        maxTime={maxTime ? maxTime : undefined}
        minTime={minTime ? minTime : undefined}
        disabled={disabled}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ width: "100%" }}
            size="small"
            autoComplete="off"
          />
        )}
      />
      {isClear && (
        <IconButton onClick={clearHandler} disabled={time === null}>
          <Clear />
        </IconButton>
      )}
    </Box>
  );
};
