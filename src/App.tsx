import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);

  const handleClickAdd = (text: string) => {
    setTodos([...todos, { id: idRef.current++, content: text }]);
  };

  const handleClickDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div className="App">
      <h1>TodoList</h1>
      <Editor handleClickAdd={handleClickAdd} />
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            handleClickDelete={handleClickDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
