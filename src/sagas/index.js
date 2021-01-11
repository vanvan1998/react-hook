import { all } from 'redux-saga/effects';
import { WatchSearchTodo, WatchGetTodoList } from './todoListSaga';

export default function* RootSaga() {
    yield all([
        WatchSearchTodo(),
        WatchGetTodoList()
    ]
    );
};