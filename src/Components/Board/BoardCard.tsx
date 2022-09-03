import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  ButtonBase,
} from "@mui/material";

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
};

const defaultProps = {
  elevation: 3,
  borderRadius: 1,
  padding: 0,
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
    id,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <ButtonBase sx={{ padding, textAlign: "start" }} id={id}>
      <Card
        sx={{ borderRadius, width: "100%" }}
        raised={raised}
        elevation={elevation}
      >
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
    </ButtonBase>
  );
};
