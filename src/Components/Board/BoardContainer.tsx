import React, { useCallback, useEffect, useState } from "react";
import { Board } from "./Board";
import { BoardCard } from "./BoardCard";
import { BoardColumn } from "./BoardColumn";
import { columnShapes, State } from "../../Utils/Board.utils";
type TaskShape = {
  date: string;
  state: State;
  title: string;
  headerColor?: string;
};

type BoardDataType = {
  tasks?: Array<TaskShape>;
};

export type BoardContainerProps = {
  date: string;
};

export const BoardContainer: React.FC<BoardContainerProps> = (props) => {
  const { date } = props;
  const [boardData, setBoardData] = useState<BoardDataType>({});
  const [content, setContent] = useState<JSX.Element[] | undefined>(undefined);

  useEffect(() => {
    const getColumnContent = (state: State) => {
      if (!boardData.tasks) return null;

      const content = boardData.tasks
        .filter((item) => {
          return item.state === state && item.date === date;
        })
        .map((item, index) => {
          const removeTaskHandler = (event: React.MouseEvent) => {
            event.stopPropagation();
            setBoardData((prevState) => {
              const result = { ...prevState };
              result.tasks?.splice(index);
              return result;
            });
          };
          return (
            <BoardCard
              key={index}
              removeTask={removeTaskHandler}
              id={`${state}-task-${index}`}
              {...item}
            />
          );
        });
      return content;
    };

    const columns = columnShapes.map((item, index) => {
      const addTaskHandler = (
        title: string,
        headerColor?: string | undefined
      ) => {
        const task = { date, state: item.state, title };
        setBoardData((prevState: BoardDataType) => {
          const result = { ...prevState };
          result.tasks ? result.tasks.push(task) : (result.tasks = [task]);
          return result;
        });
      };

      return (
        <BoardColumn key={index} date={date} addTask={addTaskHandler} {...item}>
          {getColumnContent(item.state)}
        </BoardColumn>
      );
    });

    setContent(columns);
  }, [date, boardData]);

  return <Board id={`board-${date}`}>{content}</Board>;
};
