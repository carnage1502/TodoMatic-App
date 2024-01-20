export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: { id: Date.now(), text, completed: false },
});

export const editTodo = (id, text) => ({
  type: "EDIT_TODO",
  payload: { id, text },
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: id,
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});

export const setEditingTodo = (todo) => ({
  type: "SET_EDITING_TODO",
  payload: todo,
});
