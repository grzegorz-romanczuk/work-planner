import { Today } from "@mui/icons-material";
import { ButtonBase, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export type NavbarLogoProps = {};

export const NavbarLogo: React.FC<NavbarLogoProps> = (props) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/work-planner");
  };

  return (
    <ButtonBase
      onClick={onClickHandler}
      sx={{ height: 40, px: 1, borderRadius: 1 }}
    >
      <Today fontSize="large" />
      <Typography variant="h4">Workplanize</Typography>
    </ButtonBase>
  );
};
