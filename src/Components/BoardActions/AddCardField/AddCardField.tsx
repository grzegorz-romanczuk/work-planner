import React, { useState } from "react";

import { AddCardButton } from "./AddCardButton";
import { AddCardForm } from "./AddCardForm";

export type AddCardFieldProps = {
  addTask: (title: string, headerColor: string | undefined) => void;
};

export const AddCardField: React.FC<AddCardFieldProps> = (
  { addTask },
  props
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  // const onSubmitHandler = (event) => {};
  return isOpen ? (
    <AddCardForm addTask={addTask} closeForm={closeHandler} />
  ) : (
    <AddCardButton onClick={openHandler} />
  );
};
