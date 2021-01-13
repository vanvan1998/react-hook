import { combineReducers } from "redux";
import todoListReducer from "../modules/todoList/reducer";
import titleParamReducer from "../modules/titleParam/reducer";

const AppReducer = combineReducers({
    todoList: todoListReducer,
    titleParam: titleParamReducer,
});

export default AppReducer;