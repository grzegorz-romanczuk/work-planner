import { Add } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { State } from "../../../Utils/Board.utils";
import styles from "./AddCardForm.module.css";

export type AddCardFormProps = {
  closeForm: () => void;
  addTask: (title: string, headerColor?: string | undefined) => void;
  date: string;
  state: State;
};

const defaultProps = {
  height: "2rem",
};

export const AddCardForm: React.FC<AddCardFormProps> = (props) => {
  const { closeForm, height, date, state, addTask } = {
    ...props,
    ...defaultProps,
  };

  const [text, setText] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // @ts-expect-error
      if (gridRef.current && !gridRef.current.contains(event.target)) {
        if (text === "") closeForm();
      }
    }

    ref.current?.focus();
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeForm, gridRef, text]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === " " || /\s{2}?/.test(value)) {
      return;
    }
    value.length > 255 ? setText(value.slice(0, 255)) : setText(value);
  };

  const onPasteHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.persist();
  };

  const onSubmitHanlder = (event: React.FormEvent) => {
    event.preventDefault();
    if (text === "") return;

    addTask(text);
    setText("");
    closeForm();
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHanlder}>
      <Grid container ref={gridRef} sx={{ height }}>
        <Grid item xs={10}>
          <TextField
            sx={{ width: "100%", pr: 2 }}
            variant="standard"
            hiddenLabel
            placeholder="Enter the Title..."
            InputProps={{
              autoComplete: "off",
            }}
            inputRef={ref}
            value={text}
            onChange={onChangeHandler}
            onPaste={onPasteHandler}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            sx={{ minWidth: 32, width: "100%", height: "100%", p: 0 }}
            type="submit"
          >
            <Add />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
