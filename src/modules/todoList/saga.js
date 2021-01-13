import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './actionTypes';
import { GetListTodoSuccessAction, GetListSearchTodoSuccessAction } from './actions';
import TodoListServices from '../../domain/services/TodoListServices';


function* SearchTodo(actions) {
    const valueSearch = actions.data.search
    var todoList = JSON.parse(localStorage.getItem('todoList'))
    const result = todoList.filter(todo => todo.indexOf(valueSearch) !== -1);
    yield put(GetListSearchTodoSuccessAction(result))
}
export function* WatchSearchTodo() {
    yield takeLatest(constants.SEARCH_TO_DO, SearchTodo)
}

function* GetTodoList() {
    try {
        const res = yield call(TodoListServices.GetAPITodoList());
        yield put(GetListTodoSuccessAction(res?.data))
    } catch (error) {
        console.log(error)
    }
}
export function* WatchGetTodoList() {
    yield takeLatest(constants.GET_LIST_TO_DO, GetTodoList)
    // debounce
    // channel
}
