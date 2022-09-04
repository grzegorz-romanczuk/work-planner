import { Clear } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";

export type BoardCardProps = {
  title?: React.ReactNode;
  subheader?: React.ReactNode;
  children?: React.ReactNode;
  minHeight?: number | string;
  maxHeight?: number | string;
  height?: number | string;
  raised?: boolean;
  elevation?: number;
  borderRadius?: number;
  padding?: number | string;
  headerColor?: string;
  id?: string;
  removeTask: (event: React.MouseEvent) => void;
};

const defaultProps = {
  elevation: 3,
  borderRadius: 1,
  padding: 0,
};

export const BoardCard: React.FC<BoardCardProps> = (props) => {
  const {
    title,
    raised,
    elevation,
    borderRadius,
    padding,
    headerColor,
    id,
    removeTask,
  } = {
    ...defaultProps,
    ...props,
  };

  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnterHandler = () => {
    setIsHovering(true);
  };
  const onMouseLeaveHandler = () => {
    setIsHovering(false);
  };

  return (
    <Card
      id={id}
      sx={{
        padding,
        textAlign: "start",
        borderRadius,
        width: "100%",
        transition: "background 0.1s",
        transitionDelay: "0.05s",
        "&:hover": {
          backgroundColor: "board.hoverCard",
          transition: "background 0s",
          transitionDelay: "0s",
        },
      }}
      raised={raised}
      elevation={elevation}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {headerColor && (
        <CardHeader
          title={
            <Typography gutterBottom variant="h6">
              {" "}
            </Typography>
          }
          sx={{
            padding: 0.5,
            backgroundColor: headerColor,
          }}
        />
      )}
      <CardContent sx={{ padding: 1, position: "relative" }}>
        <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
          {title}
        </Typography>
        {isHovering && (
          <IconButton
            size="small"
            onClick={removeTask}
            sx={{
              position: "absolute",
              top: 0,
              left: "100%",
              translate: "-115% 15%",
              backgroundColor: "board.buttonBackground",
              borderRadius: 1,
              "&:hover": {
                backgroundColor: "board.hoverbuttonBackground",
              },
            }}
          >
            <Clear color="primary" fontSize="inherit" />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};
