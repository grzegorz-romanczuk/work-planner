export type TaskShape = {
  date: string;
  state: State;
  title: string;
  schedule?: { from?: string | null; to?: string | null };
  headerColor?: string;
  description?: string;
  isAlarm?: boolean;
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
