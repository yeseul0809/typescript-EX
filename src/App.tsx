import React, { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";

type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | { type: "DELETE"; id: number };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id);
    }
  }
}
function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const handleClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const handleClickDelete = (id: number) => {
    dispatch({ type: "DELETE", id: id });
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
