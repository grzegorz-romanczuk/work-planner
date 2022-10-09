import React from "react";
import {
  Dialog,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  alpha,
} from "@mui/material";

import { Close } from "@mui/icons-material";
import { reducerState, reducerAction } from "../../Board/BoardCard";
import { EditCardHeader } from "./EditCardHeader";
import { EditCardContent } from "./EditCardContent";
import { EditCardActions } from "./EditCardActions";

type EditCardModalProps = {
  open: boolean;
  closeHandler: () => void;
  taskState: reducerState;
  taskDispatch: React.Dispatch<reducerAction>;
  removeHandler: () => void;
};

export const EditCardModal: React.FC<EditCardModalProps> = (props) => {
  const { open, closeHandler, taskState, taskDispatch, removeHandler } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isDarkMode = theme.palette.mode === "dark";
  return (
    <Dialog
      open={open}
      onClose={closeHandler}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="md"
    >
      <IconButton
        onClick={closeHandler}
        color="primary"
        sx={{
          position: "absolute",
          top: 0,
          left: "100%",
          translate: "-120%",
          m: 0.5,
        }}
      >
        <Close />
      </IconButton>
      {taskState.headerColor && (
        <Box
          sx={{
            backgroundColor: alpha(
              taskState.headerColor,
              isDarkMode ? 0.4 : 0.8
            ),
            height: "48px",
          }}
        />
      )}
      <EditCardHeader taskState={taskState} taskDispatch={taskDispatch} />
      <EditCardContent taskState={taskState} taskDispatch={taskDispatch} />
      <EditCardActions
        taskState={taskState}
        closeHandler={closeHandler}
        taskDispatch={taskDispatch}
        removeHandler={removeHandler}
      />
    </Dialog>
  );
};
