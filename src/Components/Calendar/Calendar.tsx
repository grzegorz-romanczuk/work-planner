import React from "react";
import {
  CalendarPicker,
  PickersDay,
  PickersDayProps,
} from "@mui/x-date-pickers-pro";

import "./Calendar.css";
import { formatUrlDate } from "../../Utils/dateFormatter";
import { EventBusy } from "@mui/icons-material";
import { useTheme } from "@mui/material";

type CalendarProps = {
  onChange: (value: Date | null) => void;
  date: string;
  plannedDays?: Array<string>;
};

export const Calendar: React.FC<CalendarProps> = (props) => {
  const { onChange, date, plannedDays } = props;
  const theme = useTheme();

  const renderPlannedPickerDay = (
    currentDate: Date,
    selectedDates: Array<Date | null>,
    pickersDayProps: PickersDayProps<Date>
  ) => {
    const isSelectedDay = formatUrlDate(currentDate) === date;
    return plannedDays && plannedDays.includes(formatUrlDate(currentDate)) ? (
      <PickersDay
        sx={
          theme.palette.mode !== "dark"
            ? {
                backgroundColor: theme.palette.secondary.light,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.main,
                },
              }
            : {}
        }
        {...pickersDayProps}
      >
        {currentDate.getDate()}
        <EventBusy
          fontSize="small"
          sx={{
            position: "absolute",
            width: 16,
            height: 16,
            translate: "85% -75%",
            borderRadius: "25%",
            backgroundColor: "inherit",
          }}
        />
      </PickersDay>
    ) : (
      <PickersDay
        sx={
          theme.palette.mode !== "dark"
            ? {
                backgroundColor: theme.palette.secondary.light,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.main,
                },
              }
            : {}
        }
        {...pickersDayProps}
      />
    );
  };

  return (
    <React.Fragment>
      <CalendarPicker
        date={new Date(date)}
        onChange={onChange}
        openTo="day"
        renderDay={renderPlannedPickerDay}
        minDate={
          new Date(
            new Date("01/01/2000").setFullYear(new Date().getFullYear() - 1)
          )
        }
        maxDate={
          new Date(
            new Date("12/31/2000").setFullYear(new Date().getFullYear() + 1)
          )
        }
        views={["month", "day"]}
        autoFocus
      />
    </React.Fragment>
  );
};
