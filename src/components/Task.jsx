/* eslint-disable react/prop-types */
import { useState } from "react";

const Task = ({ task, handleDelete, handleChange }) => {
  const [isEditing, setIsEditing] = useState(false);
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
