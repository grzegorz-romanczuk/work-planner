import React, { useState } from "react";
import { DropdownMenuButton } from "./DropdownMenuButton";

type DropdownMenuProps = {};

export const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  return <DropdownMenuButton isOpen={isOpen} onClick={openHandler} />;
};
