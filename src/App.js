import React, { useEffect } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import HashFiltersContainer from "./components/hashFilter/hashFilter";
import TodosContainer from "./components/toDosContainer/toDosContainer";
import AddTodoForm from "./components/addToDo/addToDo";
import todo from "./assets/todo.png";

import {
  setFilteredTodos,
  clearState,
  addHashTagFilter,
} from "./redux/todos/todos.actions";
import "./App.css";

const App = ({ todos, hashTagFilters, setFilteredTodos, clearState }) => {
  useEffect(() => {
    let filteredTodosList = hashTagFilters.reduce((acc, cur) => {
      return acc.filter((item) => item.hashTags.includes(cur));
    }, todos);
    setFilteredTodos(filteredTodosList);
  }, [todos, hashTagFilters, setFilteredTodos]);

  return (
    <div className="app">
      <div className="app_container">
        <h1 className="heading">To-Do App</h1>
        <img src={todo} className="img" alt="todo icon" />
        <div className="clear-button">
          <Button variant="danger" onClick={clearState}>
            Clear List
          </Button>
        </div>
        <HashFiltersContainer />
        <AddTodoForm />
        <TodosContainer />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  filteredTodos: state.todos.filteredTodos,
  hashTagFilters: state.todos.hashTagFilters,
});
const mapDispatchToProps = (dispatch) => ({
  addHashTagFilter: (hashTagFilter) =>
    dispatch(addHashTagFilter(hashTagFilter)),
  setFilteredTodos: (filteredTodos) =>
    dispatch(setFilteredTodos(filteredTodos)),
  clearState: () => dispatch(clearState()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
