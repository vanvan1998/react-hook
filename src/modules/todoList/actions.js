import * as constants from './actionTypes';

export const getListTodoAction = () => ({
    type: constants.GET_LIST_TO_DO,
});

export const getListTodoSuccessAction = (todoList) => ({
    type: constants.GET_LIST_TO_DO_SUCCESS,
    data: { todoList }
});

export const deleteTodoAction = (todo) => ({
    type: constants.DELETE_TO_DO,
    data: { todo }
});

export const addTodoAction = (todo) => ({
    type: constants.ADD_TO_DO,
    data: { todo }
});

export const searchTodoAction = (search) => ({
    type: constants.SEARCH_TO_DO,
    data: { search }
});

export const getListSearchTodoSuccessAction = (todoList) => ({
    type: constants.GET_LIST_SEARCH_TO_DO_SUCCESS,
    data: { todoList }
});