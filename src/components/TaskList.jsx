/* eslint-disable react/prop-types */
import { useContext } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import { TaskContext } from "../context/taskContext";

const TaskList = () => {
  const tasks = useContext(TaskContext);
  return (
    <>
      <AddTask />
      {tasks.length > 0 ? (
        <ul>
          {tasks?.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <p>no tasks present</p>
      )}
    </>
  );
};

export default TaskList;
