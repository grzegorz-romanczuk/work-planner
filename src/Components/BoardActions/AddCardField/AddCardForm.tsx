import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export type AddCardFormProps = { closeForm: () => void };

const defaultProps = {
  height: "2rem",
};

export const AddCardForm: React.FC<AddCardFormProps> = (props) => {
  const { closeForm, height } = { ...props, ...defaultProps };

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
    if (
      event.target.value === " " ||
      /\s{2}?/.test(event.target.value) ||
      /.{256}$/.test(event.target.value)
    ) {
      return;
    }

    setText(event.target.value);
  };

  const onClickHandler = () => {};

  return (
    <Grid container ref={gridRef} sx={{ height }}>
      <Grid item xs={8}>
        <TextField
          sx={{ width: "100%", pr: 2 }}
          variant="standard"
          hiddenLabel
          placeholder="Enter the Title..."
          inputRef={ref}
          value={text}
          onChange={onChangeHandler}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          sx={{ width: "100%", height: "100%", p: 0 }}
        >
          Add New
        </Button>
      </Grid>
    </Grid>
  );
};
