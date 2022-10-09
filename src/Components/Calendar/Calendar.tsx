import React from "react";
import { CalendarPicker } from "@mui/x-date-pickers-pro";

import "./Calendar.css";

type CalendarProps = {
  onChange: (value: Date | null) => void;
  date: string;
};

export const Calendar: React.FC<CalendarProps> = (props) => {
  const { onChange, date } = props;

  return (
    <React.Fragment>
      <CalendarPicker
        date={new Date(date)}
        onChange={onChange}
        openTo="day"
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
