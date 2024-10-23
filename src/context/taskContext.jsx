/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { initialTasks } from "../data/data";
import taskReducer from "../reducers/taskReducer";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
export const useTaskDispatch = () => {
  return useContext(TaskDispatchContext);
};
