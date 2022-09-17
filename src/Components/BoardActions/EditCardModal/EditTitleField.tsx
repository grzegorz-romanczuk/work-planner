import React, { useState } from "react";
import { Title } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import { reducerAction } from "../../Board/BoardCard";

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

    value.length > 255 ? setTitle(value.slice(0, 255)) : setTitle(value);
  };

  const onBlurHandler = () => {
    const isValid = title.length > 0;
    setIsError(!isValid);
    isValid && taskDispatch({ type: "edit", result: { title } });
    console.log(isValid);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Title sx={{ width: 48 }} />
      <TextField
        variant="outlined"
        value={title}
        size="small"
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        sx={{
          border: "none",
          py: 0,
          width: "100%",
        }}
        {...(isError
          ? { label: "Title is required", error: true }
          : { label: "Title" })}
      />
    </Box>
  );
};
