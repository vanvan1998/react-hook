import { all } from 'redux-saga/effects';
import { watchSearchTodo, watchGetTodoList } from '../modules/todoList/saga';
import { watchPostLogin } from '../modules/titleParam/saga.ts';

export default function* RootSaga() {
    yield all([
        watchSearchTodo(),
        watchGetTodoList(),
        watchPostLogin()
    ]
    );
};