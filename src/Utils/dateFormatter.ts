import { format } from "date-fns";

export const dateFormatter = (date: Date) => {
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};

export const formatCalendarDate = (date: Date) => {
  return format(date, "eeee', 'do MMMM yyyy");
};

export const formatUrlDate = (date: Date) => {
  return format(date, "dd-MMM-yyy");
};
