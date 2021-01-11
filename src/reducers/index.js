import { combineReducers } from "redux";
import todoListReducer from "./todoListReducer";

const AppReducer = combineReducers({
    todoList: todoListReducer,
});

export default AppReducer;