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
      <CalendarPicker date={new Date(date)} onChange={onChange} />
    </React.Fragment>
  );
};
