import React, { useState } from "react";
import { State } from "../../../Utils/Board.utils";

import { AddCardButton } from "./AddCardButton";
import { AddCardForm } from "./AddCardForm";

export type AddCardFieldProps = {
  date: string;
  state: State;
  addTask: (title: string, headerColor: string | undefined) => void;
};

export const AddCardField: React.FC<AddCardFieldProps> = (
  { date, state, addTask },
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
    <AddCardForm
      state={state}
      date={date}
      addTask={addTask}
      closeForm={closeHandler}
    />
  ) : (
    <AddCardButton onClick={openHandler} />
  );
};
