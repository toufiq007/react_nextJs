import { useContext } from "react";
import { TaskContext, TaskDispatchContext } from "../context/taskContext";

export const useTask = () => {
  const tasks = useContext(TaskContext);
  const dispatch = useContext(TaskDispatchContext);

  return {
    tasks,
    dispatch,
  };
};
