import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { EditTitleField } from "./EditTitleField";
import { Close } from "@mui/icons-material";
import { reducerState, reducerAction } from "../../Board/BoardCard";
import { EditStateField } from "./EditStateField";
import { Box } from "@mui/system";
import { EditDateField } from "./EditDateField";

type EditCardModalProps = {
  open: boolean;
  closeHandler: () => void;
  taskState: reducerState;
  taskDispatch: React.Dispatch<reducerAction>;
};

export const EditCardModal: React.FC<EditCardModalProps> = (props) => {
  const { open, closeHandler, taskState, taskDispatch } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={open}
      onClose={closeHandler}
      fullScreen={fullScreen}
      fullWidth
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
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          mr: 6,
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          <EditTitleField
            taskTitle={taskState.title}
            taskDispatch={taskDispatch}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              columnGap: 1,
              rowGap: 2,
            }}
          >
            <EditDateField
              taskDate={taskState.date}
              taskDispatch={taskDispatch}
            />
            <EditStateField
              state={taskState.state}
              taskDispatch={taskDispatch}
            />
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};
