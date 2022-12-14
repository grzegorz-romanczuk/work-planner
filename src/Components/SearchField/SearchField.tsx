import { InputAdornment, SxProps, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

export type SearchFieldProps = { sxProps?: SxProps };
export const SearchField: React.FC<SearchFieldProps> = (props) => {
  const { sxProps } = props;
  return (
    <TextField
      color="primary"
      placeholder="Search"
      type="search"
      variant="standard"
      InputProps={{
        disableUnderline: true,
        autoComplete: "off",
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      sx={{
        backgroundColor: "secondary.light",
        borderRadius: 5,
        px: 2,
        width: { xs: "100%" },
        maxWidth: { xs: "100%", sm: 500 },
        minWidth: 200,
        boxShadow: "inset 0px 0px 5px 0px rgba(0, 0, 0, 0.5)",
        mx: 2,
        ...sxProps,
      }}
    />
  );
};
