import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Todo Matic</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
