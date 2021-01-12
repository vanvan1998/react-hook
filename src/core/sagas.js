import { all } from 'redux-saga/effects';
import { WatchSearchTodo, WatchGetTodoList } from '../modules/todoList/saga';

export default function* RootSaga() {
    yield all([
        WatchSearchTodo(),
        WatchGetTodoList()
    ]
    );
};