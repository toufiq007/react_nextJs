/* eslint-disable react/prop-types */
import AddTask from "./AddTask";
import Task from "./Task";

const TaskList = ({ tasks, addTaxk, handleChange, handleDelete }) => {
  console.log(tasks);
  return (
    <>
      <AddTask addTaxk={addTaxk} />
      {tasks.length > 0 ? (
        <ul>
          {tasks?.map((task) => (
            <Task
              key={task.id}
              handleChange={handleChange}
              handleDelete={handleDelete}
              task={task}
            />
          ))}
        </ul>
      ) : (
        <p>no tasks present</p>
      )}
    </>
  );
};

export default TaskList;
