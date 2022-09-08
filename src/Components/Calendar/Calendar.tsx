import React from "react";
import { CalendarPicker } from "@mui/x-date-pickers-pro";
import { createSearchParams, useSearchParams } from "react-router-dom";

import "./Calendar.css";

type CalendarProps = {
  onChange?: (value: string) => void;
  date: string;
};

export const Calendar: React.FC<CalendarProps> = (props) => {
  const { onChange, date } = props;
  // @ts-ignore
  return <CalendarPicker date={new Date(date)} onChange={onChange} />;
};
