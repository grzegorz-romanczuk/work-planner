import {
  alpha,
  Card,
  CardContent,
  CardHeader,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { RemoveCardButton } from "../BoardActions/RemoveCardButton/RemoveCardButton";

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

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
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
        "&:hover": {
          backgroundColor: "board.hoverCard",
        },
      }}
      raised={raised}
      elevation={elevation}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      tabIndex={0}
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
            backgroundColor: headerColor
              ? alpha(headerColor, isDarkMode ? 0.4 : 0.8)
              : undefined,
          }}
        />
      )}
      <CardContent sx={{ padding: 1, position: "relative" }}>
        <Typography
          variant="body1"
          sx={{ wordWrap: "break-word", fontWeight: 500 }}
        >
          {title}
        </Typography>
        {isHovering && <RemoveCardButton onClick={removeTask} />}
      </CardContent>
    </Card>
  );
};
