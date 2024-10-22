import { useState } from "react";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/data";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (tasks) => {
    const nextId = tasks.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return nextId + 1;
  };

  // handle add

  const handleAddTasks = (text) => {
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text, done: false },
    ]);
  };

  // handle delete
  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // handleChange
  const handleChange = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id ? { ...updatedTask } : task
      )
    );
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
