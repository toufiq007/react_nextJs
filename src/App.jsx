/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/data";
import taskReducer from "./reducers/taskReducer";
import { TaskContextProvider } from "./context/taskContext";

const App = () => {
  return (
    <TaskContextProvider>
      <div>
        <h2>Prague Itinerary</h2>
        <TaskList />
      </div>
    </TaskContextProvider>
  );
};

export default App;
