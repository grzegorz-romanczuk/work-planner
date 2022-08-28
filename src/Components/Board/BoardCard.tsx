import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { isNumber } from "util";

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
};

const defaultProps = {
  elevation: 3,
  borderRadius: 1,
};

export const BoardCard: React.FC<BoardCardProps> = (props) => {
  const {
    title,
    subheader,
    children,
    minHeight,
    maxHeight,
    height: heightProp,
    raised,
    elevation,
    borderRadius,
    padding,
    headerColor,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <Card sx={{ borderRadius }} raised={raised} elevation={elevation}>
      {headerColor && (
        <CardHeader
          title={
            <Typography gutterBottom variant="h6">
              {" "}
            </Typography>
          }
          sx={{
            padding: 1,
            backgroundColor: headerColor,
          }}
        />
      )}
      <CardContent sx={{ padding: 1 }}>{title}</CardContent>
    </Card>
  );
};
