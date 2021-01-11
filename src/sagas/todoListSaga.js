import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from '../constants';
import { GetListTodoSuccessAction, GetListSearchTodoSuccessAction } from '../actions/todoListAction';

const axios = require('axios');

function* SearchTodo(actions) {
    const valueSearch = actions.data.search
    var todoList = JSON.parse(localStorage.getItem('todoList'))
    const result = todoList.filter(todo => todo.indexOf(valueSearch) !== -1);
    yield put(GetListSearchTodoSuccessAction(result))
}
export function* WatchSearchTodo() {
    yield takeLatest(constants.SEARCH_TO_DO, SearchTodo)
}

function GetAPITodoList() {
    return axios.get(`/posts?_limit=10&_page=1`, {})
}

function* GetTodoList() {
    try {
        const res = yield call(GetAPITodoList);
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
