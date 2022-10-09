import { columnShapeProps } from "./types";

export const columnShapes: columnShapeProps = [
  {
    id: "column-todo",
    title: "TO DO",
    headerColor: "#64dd17",
    state: "todo",
  },
  {
    id: "column-progress",
    title: "IN PROGRESS",
    headerColor: "#536dfe",
    state: "progress",
  },
  {
    id: "column-completed",
    title: "DONE",
    headerColor: "#ef6c00",
    state: "done",
  },
];
