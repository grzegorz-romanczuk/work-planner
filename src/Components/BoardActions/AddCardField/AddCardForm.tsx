import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export type AddCardFormProps = { closeForm: () => void };

export const AddCardForm: React.FC<AddCardFormProps> = (props) => {
  const { closeForm } = props;

  const [text, setText] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref?.current?.focus();
  }, []);

  const onBlurHandler = () => {
    if (text === "") closeForm();
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <Grid container>
      <Grid xs={8}>
        <TextField
          sx={{ width: "100%", pr: 2 }}
          variant="standard"
          hiddenLabel
          placeholder="Enter the Title..."
          inputRef={ref}
          value={text}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
      </Grid>
      <Grid xs={4}>
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
