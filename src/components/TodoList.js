import React from "react";
import { connect } from "react-redux";
import {
  toggleTodo,
  deleteTodo,
  setFilter,
  setEditingTodo,
} from "../redux/actions";

const TodoList = ({
  todos,
  filter,
  toggleTodo,
  deleteTodo,
  setFilter,
  setEditingTodo,
}) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="todo-list-container">
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All Tasks</button>
        <button onClick={() => setFilter("completed")}>Completed Tasks</button>
        <button onClick={() => setFilter("pending")}>Pending Tasks</button>
      </div>

      <ul className="todo-items">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="todo-checkbox"
            />
            <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
              {todo.text}
            </span>{" "}
            <button
              onClick={() => setEditingTodo(todo)}
              className="edit-button"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.filter,
});

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo,
  setFilter,
  setEditingTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
