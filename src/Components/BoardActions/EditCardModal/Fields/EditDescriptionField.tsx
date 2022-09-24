import { Notes } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { reducerAction } from "../../../Board/BoardCard";

type EditDescriptionFieldProps = {
  taskDescription?: string;
  taskDispatch: React.Dispatch<reducerAction>;
};

export const EditDescriptionField: React.FC<EditDescriptionFieldProps> = (
  props
) => {
  const { taskDescription, taskDispatch } = props;
  const [description, setDescription] = useState(taskDescription);

  const onChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (value[0] === " ") {
      return;
    }

    value.length > 2048
      ? setDescription(value.slice(0, 2048))
      : setDescription(value);
  };

  const onBlurHandler = () => {
    setDescription(description?.trim());
    taskDispatch({
      type: "edit",
      result: { description: description?.trim() },
    });
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Notes sx={{ width: 48 }} />
      <TextField
        variant="outlined"
        multiline
        minRows={4}
        maxRows={16}
        value={description}
        size="small"
        label="Description"
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        sx={{
          width: "100%",
        }}
      />
    </Box>
  );
};
