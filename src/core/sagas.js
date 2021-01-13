import { all } from 'redux-saga/effects';
import { WatchSearchTodo, WatchGetTodoList } from '../modules/todoList/saga';
import { WatchPostLogin } from '../modules/titleParam/saga.ts';

export default function* RootSaga() {
    yield all([
        WatchSearchTodo(),
        WatchGetTodoList(),
        WatchPostLogin()
    ]
    );
};