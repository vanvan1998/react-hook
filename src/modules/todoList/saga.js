import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './actionTypes';
import { getListTodoSuccessAction, getListSearchTodoSuccessAction } from './actions';
import TodoListServices from '../../domain/services/TodoListServices';


function* searchTodo(actions) {
    const valueSearch = actions.data.search
    var todoList = JSON.parse(localStorage.getItem('todoList'))
    const result = todoList.filter(todo => todo.indexOf(valueSearch) !== -1);
    yield put(getListSearchTodoSuccessAction(result))
}
export function* watchSearchTodo() {
    yield takeLatest(constants.SEARCH_TO_DO, searchTodo)
}

function* GetTodoList() {
    try {
        const res = yield call(TodoListServices.getAPITodoList);
        yield put(getListTodoSuccessAction(res?.data))
    } catch (error) {
        console.log(error)
    }
}
export function* watchGetTodoList() {
    yield takeLatest(constants.GET_LIST_TO_DO, GetTodoList)
    // debounce
    // channel
}
