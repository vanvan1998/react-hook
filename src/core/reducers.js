import { combineReducers } from "redux";
import todoListReducer from "../modules/todoList/reducer";

const AppReducer = combineReducers({
    todoList: todoListReducer,
});

export default AppReducer;