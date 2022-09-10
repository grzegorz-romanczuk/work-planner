import React from "react";
import { DropdownMenuButton } from "./DropdownMenuButton";

type DropdownMenuProps = { toggleCalendar?: () => void };

export const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  const { toggleCalendar } = props;

  return <DropdownMenuButton onClick={toggleCalendar} />;
};
