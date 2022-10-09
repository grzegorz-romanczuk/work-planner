import { BoardDataType } from "./types";

export const SaveData = (data: BoardDataType) => {
  localStorage.setItem("BoardData", JSON.stringify(data));
};

export const LoadData = (): BoardDataType => {
  const data = localStorage.getItem("BoardData");
  return data ? JSON.parse(data) : {};
};
