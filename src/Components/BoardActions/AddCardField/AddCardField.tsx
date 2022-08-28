import React, { useState } from "react";
import { AddCardButton } from "./AddCardButton";
import { AddCardForm } from "./AddCardForm";

export type AddCardFieldProps = {};

export const AddCardField: React.FC<AddCardFieldProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  // const onSubmitHandler = (event) => {};
  return isOpen ? (
    <AddCardForm closeForm={closeHandler} />
  ) : (
    <AddCardButton onClick={openHandler} />
  );
};
