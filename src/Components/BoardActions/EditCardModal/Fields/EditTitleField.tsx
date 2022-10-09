import React, { useState } from "react";
import { Title } from "@mui/icons-material";
import { Box, FormControl, FormHelperText, TextField } from "@mui/material";
import { reducerAction } from "../../../Board/BoardCard";

type EditTitleFieldProps = {
  taskTitle: string;
  taskDispatch: React.Dispatch<reducerAction>;
};

export const EditTitleField: React.FC<EditTitleFieldProps> = (props) => {
  const { taskTitle, taskDispatch } = props;
  const [title, setTitle] = useState(taskTitle);
  const [isError, setIsError] = useState(false);

  const onChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (value[0] === " " || /\s{2}?/.test(value)) {
      return;
    }

    value.length > 256 ? setTitle(value.slice(0, 256)) : setTitle(value);
  };

  const onBlurHandler = () => {
    const isValid = title.length > 0;
    setIsError(!isValid);
    isValid && taskDispatch({ type: "edit", result: { title } });
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flex: 1,
      }}
    >
      <Title sx={{ width: 48 }} />
      <FormControl
        sx={{
          width: "100%",
        }}
      >
        <TextField
          variant="standard"
          value={title}
          size="small"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          hiddenLabel
          error={isError}
        />
        {isError && (
          <FormHelperText error id="outlined-weight-helper-text">
            Title is required
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};
