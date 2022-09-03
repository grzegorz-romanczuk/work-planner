export const columnShapes: columnShapeProps = [
  {
    id: "column-todo",
    title: "To Do",
    headerColor: "#64dd17",
    state: "todo",
  },
  {
    id: "column-progress",
    title: "In Progress",
    headerColor: "#536dfe",
    state: "progress",
  },
  {
    id: "column-completed",
    title: "Completed",
    headerColor: "#ef6c00",
    state: "completed",
  },
];

type columnShapeProps = Array<{
  id: string;
  title: string;
  headerColor: string;
  state: State;
}>;

export type State = "todo" | "progress" | "completed";
