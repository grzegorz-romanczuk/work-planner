import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

export type SearchFieldProps = {};
export const SearchField: React.FC<SearchFieldProps> = (props) => {
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
        maxWidth: { xs: "100%", md: 500 },
        minWidth: 200,
        boxShadow: "inset 0 0 5px #000000",
      }}
    />
  );
};
