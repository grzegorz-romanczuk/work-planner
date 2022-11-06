import { Clear, Schedule } from "@mui/icons-material";
import {
  Box,
  Dialog,
  IconButton,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers-pro";
import "./EditTimeField.css";
import React, { useState } from "react";

type EditTimeFieldProps = {
  time: Date | null;
  changeHandler: (value: Date | null) => void;
  label?: string;
  showIcon?: boolean;
  maxTime?: Date | null;
  minTime?: Date | null;
  disabled?: boolean;
  isClear?: boolean;
  clearHandler?: () => void;
  errorHandler?: (reason: string | null, value: Date | null) => void;
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

  const [mobileBackground, setMobileBackground] = useState(false);
  const isDesktop = useMediaQuery("@media (pointer: fine)");

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
        onOpen={() => {
          if (!isDesktop) {
            setMobileBackground(true);
            setTimeout(() => {
              setMobileBackground(false);
            }, 100);
          }
        }}
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
      <Dialog open={mobileBackground} />
      {isClear && (
        <IconButton onClick={clearHandler} disabled={time === null}>
          <Clear />
        </IconButton>
      )}
    </Box>
  );
};
