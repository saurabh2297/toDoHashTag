import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todosReducer from "./todos/todos.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"],
};
const rootReducer = combineReducers({
  todos: todosReducer,
});

export default persistReducer(persistConfig, rootReducer);
