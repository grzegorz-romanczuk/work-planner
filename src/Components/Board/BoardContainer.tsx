import React, { useEffect, useState } from "react";
import { Board } from "./Board";
import { BoardCard } from "./BoardCard";
import { BoardColumn } from "./BoardColumn";
import { columnShapes } from "../../Utils/Board.utils";
import { State, BoardDataType, TaskShape } from "../../Utils/types";
import { useSearchParams } from "react-router-dom";
import { formatUrlDate } from "../../Utils/dateFormatter";

export type BoardContainerProps = {};

export const BoardContainer: React.FC<BoardContainerProps> = (props) => {
  const [boardData, setBoardData] = useState<BoardDataType>({});
  const [content, setContent] = useState<JSX.Element[] | undefined>(undefined);
  const [searchParams] = useSearchParams();
  const getDate = searchParams.get("date") || new Date();
  const date = formatUrlDate(new Date(getDate));

  useEffect(() => {
    const getColumnContent = (state: State) => {
      if (!boardData.tasks) return null;

      const content = boardData.tasks
        .filter((item) => {
          return item.state === state && item.date === date;
        })
        .map((item, index) => {
          const removeTaskHandler = () => {
            setBoardData((prevState) => {
              const result = { ...prevState };
              result.tasks = result.tasks?.filter((task) => task !== item);
              return result;
            });
          };
          const editTaskHandler = (newTask: TaskShape) => {
            setBoardData((prevState) => {
              const result = { ...prevState };
              if (result.tasks) {
                const index = result.tasks.indexOf(item);
                result.tasks[index] = newTask;
              }
              return result;
            });
          };

          return (
            <BoardCard
              key={index}
              removeTask={removeTaskHandler}
              editTask={editTaskHandler}
              id={`${state}-task-${index}`}
              taskData={item}
            />
          );
        });

      return content;
    };

    const columns = columnShapes.map((item, index) => {
      const addTaskHandler = (title: string) => {
        const task = { date, state: item.state, title, time: null };
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
