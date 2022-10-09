import { VideoLabel } from "@mui/icons-material";
import {
  alpha,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";
import React from "react";
import { reducerAction } from "../../../Board/BoardCard";

type EditColorFieldProps = {
  taskColor?: string;
  taskDispatch: React.Dispatch<reducerAction>;
};

const colors = [
  "#ffffff",
  "#ff0000",
  "#ff5e00",
  "#ff9100",
  "#ffd900",
  "#7bff00",
  "#00ff55",
  "#00801c",
  "#00ffaa",
  "#00f7ff",
  "#0099ff",
  "#0051ff",
  "#8c00ff",
  "#9600d1",
  "#cc00ff",
  "#ff00d4",
  "#ff0077",
  "#ff0037",
];

export const EditColorField: React.FC<EditColorFieldProps> = (props) => {
  const { taskColor, taskDispatch } = props;
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const onChangeHandler = (event: SelectChangeEvent) => {
    const value = event.target.value;

    value === "#ffffff"
      ? taskDispatch({ type: "edit", result: { headerColor: undefined } })
      : taskDispatch({ type: "edit", result: { headerColor: value } });
  };

  const menuItems = colors.map((color) => {
    if (color === "#ffffff") {
      return (
        <MenuItem
          value={color}
          sx={{
            height: "2em",
          }}
          key={color}
        >
          None
        </MenuItem>
      );
    }
    return (
      <MenuItem value={color} key={color}>
        <Box
          sx={{
            backgroundColor: alpha(color, isDarkMode ? 0.4 : 0.8),
            height: "1.4375em",
            width: "100%",
            borderRadius: 1,
          }}
        />
      </MenuItem>
    );
  });

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
      }}
    >
      <VideoLabel sx={{ width: 48 }} />
      <FormControl fullWidth>
        <InputLabel id="color-label">Color</InputLabel>
        <Select
          value={taskColor || colors[0]}
          onChange={onChangeHandler}
          label="Status"
          labelId="color-label"
          size="small"
          fullWidth
        >
          {menuItems}
        </Select>
      </FormControl>
    </Box>
  );
};
