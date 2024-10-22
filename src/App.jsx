/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/data";
import taskReducer from "./reducers/taskReducer";

const App = () => {
  //   const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const getNextId = (tasks) => {
    const nextId = tasks.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return nextId + 1;
  };

  // handle add

  const handleAddTasks = (text) => {
    dispatch({
      type: "added",
      text,
    });
  };

  // handle delete
  const handleDelete = (id) => {
    dispatch({ type: "deleted", id });
  };

  // handleChange
  const handleChange = (updatedTask) => {
    dispatch({ type: "changed", updatedTask });
  };

  return (
    <div>
      <h2>Prague Itinerary</h2>
      <TaskList
        addTaxk={handleAddTasks}
        tasks={tasks}
        handleDelete={handleDelete}
        handleChange={handleChange}
      />
    </div>
  );
};

export default App;
