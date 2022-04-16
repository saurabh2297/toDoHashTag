import todosActionTypes from "./todos.types";
export const setTodos = (todos) => ({
  type: "SET_TODOS",
  payload: todos,
});

export const setNewTodoText = (newTodoText) => ({
  type: todosActionTypes.SET_NEW_TODO_TEXT,
  payload: newTodoText,
});

export const addHashTagFilter = (hashTagFilter) => ({
  type: todosActionTypes.ADD_HASH_TAG_FILTERS,
  payload: hashTagFilter,
});
export const removeHashTagFilter = (hashTagFilter) => ({
  type: todosActionTypes.REMOVE_HASH_TAG_FILTER,
  payload: hashTagFilter,
});

export const setFilteredTodos = (filteredTodos) => ({
  type: todosActionTypes.SET_FILTERED_TODOS,
  payload: filteredTodos,
});

export const clearState = () => ({
  type: todosActionTypes.CLEAR_STATE,
});

export const markTodoAsCompleted = (todoId) => ({
  type: todosActionTypes.MARK_TODO_AS_COMPLETED,
  payload: todoId,
});

export const addNewTodo = () => ({ type: todosActionTypes.ADD_NEW_TODO });
