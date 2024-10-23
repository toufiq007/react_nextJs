/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTaskDispatch } from "../context/taskContext";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTaskDispatch();
  const handleChange = (updatedTask) => {
    dispatch({ type: "changed", updatedTask });
  };
  const handleDelete = (id) => {
    dispatch({ type: "deleted", id });
  };
  return (
    <>
      <li>
        <label htmlFor="checkbox">
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
              handleChange({ ...task, done: e.target.checked });
            }}
            id="checkbox"
          />
        </label>

        {isEditing ? (
          <>
            <input
              type="text"
              value={task.text}
              onChange={(e) => handleChange({ ...task, text: e.target.value })}
            />
            <button onClick={() => setIsEditing(false)}>save</button>
          </>
        ) : (
          <>
            <span>
              {task.done ? (
                <strike> {task.text} </strike>
              ) : (
                <span>{task.text}</span>
              )}
            </span>
            <button onClick={() => setIsEditing(true)}>edit</button>
          </>
        )}

        {/* {isEditing ? (
          <input type="text" value={task.text} />
        ) : (
          <span>{task.text}</span>
        )}

        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save" : "Edit"}
        </button> */}
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </li>
    </>
  );
};

export default Task;
