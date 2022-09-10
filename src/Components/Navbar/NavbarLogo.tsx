import { Today } from "@mui/icons-material";
import { ButtonBase, Typography } from "@mui/material";
export type NavbarLogoProps = {};

export const NavbarLogo: React.FC<NavbarLogoProps> = (props) => {
  return (
    <ButtonBase sx={{ height: 40, px: 1, borderRadius: 1 }}>
      <Today fontSize="large" />
      <Typography variant="h4">Workplanize</Typography>
    </ButtonBase>
  );
};
