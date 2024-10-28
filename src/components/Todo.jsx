import { useState, useRef } from "react";
import { flushSync } from "react-dom";

export default function TodoList() {
  const listRef = useRef(null);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  function handleAdd() {
    const newTodo = { id: nextId++, text: text };
    setText("");
    // issue is here

    // this is the currected way
    flushSync(() => {
      setTodos([...todos, newTodo]);
    });
    // normally after adding the setTodoes in the next render updated data is present in the listRef
    listRef.current.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
    // but ref in not waited for the next render.it is executed to the line so we should use the flush sync and tell the react that execute the setTodoes and ref one by one
  }

  return (
    <>
      <button onClick={handleAdd}>Add</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ul ref={listRef}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

let nextId = 0;
let initialTodos = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: "Todo #" + (i + 1),
  });
}
