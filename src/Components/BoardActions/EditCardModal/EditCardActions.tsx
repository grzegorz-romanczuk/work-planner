import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { reducerState, reducerAction } from "../../Board/BoardCard";

type EditCardActionsProps = {
  taskState: reducerState;
  closeHandler: () => void;
  taskDispatch: React.Dispatch<reducerAction>;
  removeHandler: () => void;
};

export const EditCardActions: React.FC<EditCardActionsProps> = (props) => {
  const { taskState, taskDispatch, closeHandler, removeHandler } = props;
  const [showDialog, setShowDialog] = useState(false);

  const cancelHandler = () => {
    setShowDialog(false);
  };

  const confirmHandler = () => {
    setShowDialog(false);
    removeHandler();
    closeHandler();
  };

  return (
    <React.Fragment>
      <DialogActions
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: 2,
        }}
      >
        <Button
          onClick={() => {
            setShowDialog(true);
          }}
        >
          Remove
        </Button>
        <Button onClick={closeHandler}>Close</Button>
      </DialogActions>
      <Dialog open={showDialog}>
        <DialogTitle>Remove task</DialogTitle>
        <DialogContent dividers>
          Are you sure you want to remove this task? You can't undo this action.
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelHandler}>Cancel</Button>
          <Button onClick={confirmHandler}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
