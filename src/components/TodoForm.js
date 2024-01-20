import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTodo, editTodo, setEditingTodo } from "../redux/actions";

const TodoForm = ({ addTodo, editTodo, editingTodo }) => {
  const [todoText, setTodoText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingTodo) {
      setTodoText(editingTodo.text);
      setIsEditing(true);
    } else {
      setTodoText("");
      setIsEditing(false);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") return;

    if (isEditing && editingTodo) {
      editTodo(editingTodo.id, todoText);
      setEditingTodo(null);
      setIsEditing(false);
    } else {
      addTodo(todoText);
    }

    setTodoText("");
  };

  const cancelUpdate = () => {
    setEditingTodo(null);
    setTodoText("");
    setIsEditing(false);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="todo-input"
        placeholder="Add your todo.."
      />
      <button type="submit" className="todo-submit-btn">
        {isEditing ? "Edit Todo" : "Add Todo"}
      </button>
      {isEditing && (
        <button type="button" onClick={cancelUpdate} className="cancel-btn">
          Cancel Update
        </button>
      )}
    </form>
  );
};

const mapStateToProps = (state) => ({
  editingTodo: state.editingTodo,
});

const mapDispatchToProps = { addTodo, editTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
