import React, { useState, useEffect } from "react";
import { Alarm } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { format24Time } from "../../Utils/dateFormatter";
import { TaskShape } from "../../Utils/types";
// @ts-ignore
import audioClip from "../../Audio/Beep.mp3";

type AlarmDialogProps = {
  isOpen: boolean;
  taskState: TaskShape;
  closeHandler: () => void;
};
export const AlarmDialog: React.FC<AlarmDialogProps> = (props) => {
  const { isOpen, taskState, closeHandler } = props;
  const [isMuted, setIsMuted] = useState(false);

  const muteHandler = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const audio = new Audio(audioClip);

    const playAudio = setInterval(() => {
      isOpen && !isMuted && audio.play();
    }, 1000);

    return () => {
      clearInterval(playAudio);
    };
  }, [isOpen, isMuted]);

  return (
    <Dialog open={isOpen} maxWidth="md" onClose={closeHandler}>
      <DialogTitle
        display="flex"
        columnGap={0.5}
        overflow="clip"
        alignItems="center"
      >
        <Alarm fontSize="large" />
        {`Alarm (${format24Time(
          new Date(taskState.schedule?.from || new Date())
        )}`}
        {taskState.schedule?.to
          ? ` - ${format24Time(new Date(taskState.schedule?.to))})`
          : ")"}
      </DialogTitle>
      <DialogContent>
        <Typography variant="h3" sx={{ lineBreak: "anywhere", px: 2 }}>
          {`${taskState.title} `}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={muteHandler}
          sx={{
            textDecoration: isMuted ? "line-through" : "none",
            "&:hover": {
              textDecoration: isMuted ? "line-through" : "none",
            },
          }}
        >
          Mute
        </Button>
        <Button onClick={closeHandler}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
