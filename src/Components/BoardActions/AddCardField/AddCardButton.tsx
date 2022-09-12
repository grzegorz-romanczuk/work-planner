import {
  ButtonBase,
  ButtonBaseProps,
  SxProps,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export type AddCardButtonProps = ButtonBaseProps &
  SxProps & { buttonText?: string; onClick?: () => void };

const defaultProps = {
  padding: 1,
  borderRadius: 2,
  width: "100%",
  height: "2rem",
  justifyContent: "left",
  buttonText: "Add New",
};

export const AddCardButton: React.FC<AddCardButtonProps> = (props) => {
  const {
    padding,
    borderRadius,
    width,
    height,
    buttonText,
    justifyContent,
    onClick,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        padding,
        borderRadius,
        width,
        height,
        justifyContent,
        transition: "background 0.2s, color 0.2s",
        "&:hover": {
          backgroundColor: "board.hoverbuttonBackground",
        },
        "&:focus": {
          backgroundColor: "board.focusbuttonBackground",
        },
      }}
    >
      <AddIcon sx={{ mx: 1 }} />
      <Typography variant="buttonText">{buttonText}</Typography>
    </ButtonBase>
  );
};
