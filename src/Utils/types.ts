export type TaskShape = {
  date: string;
  state: State;
  title: string;
  headerColor?: string;
  description?: string;
};

export type BoardDataType = {
  tasks?: Array<TaskShape>;
};

export type columnShapeProps = Array<{
  id: string;
  title: string;
  headerColor: string;
  state: State;
}>;

export type State = "todo" | "progress" | "done";
