import todosActionTypes from "./todos.types";

const INITIAL_STATE = {
  todos: [],
  hashTagFilters: [],
  filteredTodos: [],
  newTodoText: "",
};

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todosActionTypes.SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case todosActionTypes.SET_NEW_TODO_TEXT:
      return {
        ...state,
        newTodoText: action.payload,
      };
    case todosActionTypes.ADD_HASH_TAG_FILTERS:
      if (state.hashTagFilters.includes(action.payload)) return state;
      return {
        ...state,
        hashTagFilters: [...state.hashTagFilters, action.payload],
      };
    case todosActionTypes.REMOVE_HASH_TAG_FILTER:
      return {
        ...state,
        hashTagFilters: state.hashTagFilters.filter(
          (item) => item !== action.payload
        ),
      };
    case todosActionTypes.SET_FILTERED_TODOS:
      return {
        ...state,
        filteredTodos: action.payload,
      };
    case todosActionTypes.MARK_TODO_AS_COMPLETED:
      let [todoObj] = state.todos.filter((todo) => todo.id === action.payload);
      let newTodoObj = { ...todoObj, status: "complete" };

      let todoWithoutNewObj = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      let indexOfFirstCompleteTodo = todoWithoutNewObj.findIndex(
        (todo) => todo.status === "complete"
      );
      if (indexOfFirstCompleteTodo === -1) {
        return {
          ...state,
          todos: [...todoWithoutNewObj, newTodoObj],
        };
      } else {
        todoWithoutNewObj.splice(indexOfFirstCompleteTodo, 0, newTodoObj);
        return {
          ...state,
          todos: todoWithoutNewObj,
        };
      }

    case todosActionTypes.CLEAR_STATE:
      return INITIAL_STATE;

    case todosActionTypes.ADD_NEW_TODO:
      const hashTags = state.newTodoText
        .split(" ")
        .filter((word) => word.startsWith("#"));

      const newTodo = {
        text: state.newTodoText,
        status: "incomplete",
        id: Math.floor(Math.random() * 1000000000000),
        hashTags: hashTags,
      };
      return {
        ...state,
        todos: [newTodo, ...state.todos],
        newTodoText: "",
      };
    default:
      return state;
  }
};
export default todosReducer;
