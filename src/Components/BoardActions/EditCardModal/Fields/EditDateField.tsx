import { EventNote } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { isValid } from "date-fns";
import React, { useState } from "react";
import { formatUrlDate } from "../../../../Utils/dateFormatter";
import { reducerAction } from "../../../Board/BoardCard";

type EditDateFieldProps = {
  taskDate: string;
  taskDispatch: React.Dispatch<reducerAction>;
};

export const EditDateField: React.FC<EditDateFieldProps> = (props) => {
  const { taskDate, taskDispatch } = props;
  const [date, setDate] = useState(new Date(taskDate));
  const [isError, setIsError] = useState(false);

  const onAcceptHandler = (value: Date | null) => {
    if (!isError && value && isValid(value)) {
      taskDispatch({ type: "edit", result: { date: formatUrlDate(value) } });
    }
  };
  const onBlurHandler = () => {
    if (!isError && date && isValid(date)) {
      taskDispatch({ type: "edit", result: { date: formatUrlDate(date) } });
    }
  };

  const onChangeHandler = (value: Date | null) => {
    if (value) {
      setDate(value);
    }
  };

  const onErrorHandler = (reason: string | null, value: Date | null) => {
    reason ? setIsError(true) : setIsError(false);
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
      <EventNote fontSize="medium" sx={{ width: 48 }} />
      <DatePicker
        openTo="day"
        views={["year", "month", "day"]}
        value={date}
        label="Date"
        onChange={onChangeHandler}
        onAccept={onAcceptHandler}
        onError={onErrorHandler}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ width: "100%" }}
            onBlur={onBlurHandler}
            size="small"
          />
        )}
      />
    </Box>
  );
};
