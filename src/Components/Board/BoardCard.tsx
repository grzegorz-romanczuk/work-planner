import { Schedule } from "@mui/icons-material";
import {
  alpha,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  useTheme,
} from "@mui/material";
import { display } from "@mui/system";
import React, { useReducer, useState } from "react";
import { format24Time } from "../../Utils/dateFormatter";
import { TaskShape } from "../../Utils/types";
import { EditCardModal } from "../BoardActions/EditCardModal/EditCardModal";
import { RemoveCardButton } from "../BoardActions/RemoveCardButton/RemoveCardButton";

export type BoardCardProps = {
  subheader?: React.ReactNode;
  children?: React.ReactNode;
  minHeight?: number | string;
  maxHeight?: number | string;
  height?: number | string;
  raised?: boolean;
  elevation?: number;
  borderRadius?: number;
  padding?: number | string;
  id?: string;
  removeTask: (event: React.MouseEvent) => void;
  editTask: (newTask: TaskShape) => void;
  taskData: TaskShape;
};

const defaultProps = {
  elevation: 3,
  borderRadius: 1,
  padding: 0,
};

export type reducerState = TaskShape;
export type reducerAction = { type: "edit"; result: Partial<TaskShape> };

const cardReducer = (state: reducerState, action: reducerAction) => {
  switch (action.type) {
    case "edit":
      return { ...state, ...action.result };
    default:
      return state;
  }
};

export const BoardCard: React.FC<BoardCardProps> = (props) => {
  const {
    raised,
    elevation,
    borderRadius,
    padding,
    id,
    removeTask,
    editTask,
    taskData,
  } = {
    ...defaultProps,
    ...props,
  };

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const [isHovering, setIsHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cardState, dispatchCardState] = useReducer(cardReducer, taskData);

  const onMouseEnterHandler = () => {
    setIsHovering(true);
  };
  const onMouseLeaveHandler = () => {
    setIsHovering(false);
  };

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
    editTask(cardState);
  };

  const cardSchedule = cardState.schedule?.from && (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Schedule />
      <Typography>
        {cardState.schedule?.from && cardState.schedule?.to
          ? `${format24Time(
              new Date(cardState.schedule?.from)
            )} - ${format24Time(new Date(cardState.schedule?.to))}`
          : cardState.schedule?.from
          ? `${format24Time(new Date(cardState.schedule?.from))}`
          : "None"}
      </Typography>
    </Box>
  );

  const cardDetails = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        columnGap: 1,
      }}
    >
      {cardSchedule}
    </Box>
  );

  return (
    <React.Fragment>
      <Card
        id={id}
        sx={{
          padding,
          textAlign: "start",
          borderRadius,
          width: "100%",
          "&:hover": {
            backgroundColor: "board.hoverCard",
          },
        }}
        raised={raised}
        elevation={elevation}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        tabIndex={0}
        onClick={openHandler}
      >
        {cardState.headerColor && (
          <CardHeader
            title={
              <Typography gutterBottom variant="h6">
                {" "}
              </Typography>
            }
            sx={{
              padding: 0.5,
              backgroundColor: cardState.headerColor
                ? alpha(cardState.headerColor, isDarkMode ? 0.4 : 0.8)
                : undefined,
            }}
          />
        )}
        <CardContent
          sx={{
            padding: 1,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            rowGap: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{ wordWrap: "break-word", fontWeight: 500 }}
          >
            {cardState.title}
          </Typography>

          {isHovering && <RemoveCardButton onClick={removeTask} />}
        </CardContent>
        <CardActions>{cardDetails}</CardActions>
      </Card>
      <EditCardModal
        open={isOpen}
        closeHandler={closeHandler}
        taskDispatch={dispatchCardState}
        taskState={cardState}
      />
    </React.Fragment>
  );
};
