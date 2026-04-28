import { useState, memo } from "react";
import Todo from "./Todo";

let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Wake up",
      desc: "Wake up at 6 AM",
    },
    {
      id: 2,
      title: "Go for GYM",
      desc: "Go for GYM at 6:30 AM ",
    },
    {
      id: 3,
      title: "Get Ready",
      desc: "Had breakfast",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        desc: Math.floor(Math.random() * 100),
      },
    ]);
  }

  return (
    <>
      <button onClick={addTodo}>Add ToDo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} desc={todo.desc} />
      ))}
    </>
  );
}

export default App;
