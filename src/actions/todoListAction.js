import * as constants from '../constants';

export const GetListTodoAction = () => ({
    type: constants.GET_LIST_TO_DO,
});

export const GetListTodoSuccessAction = (todoList) => ({
    type: constants.GET_LIST_TO_DO_SUCCESS,
    data: { todoList }
});

export const DeleteTodoAction = (todo) => ({
    type: constants.DELETE_TO_DO,
    data: { todo }
});

export const AddTodoAction = (todo) => ({
    type: constants.ADD_TO_DO,
    data: { todo }
});

export const SearchTodoAction = (search) => ({
    type: constants.SEARCH_TO_DO,
    data: { search }
});

export const GetListSearchTodoSuccessAction = (todoList) => ({
    type: constants.GET_LIST_SEARCH_TO_DO_SUCCESS,
    data: { todoList }
});


// export { GetListTodoAction, GetListTodoSuccessAction, AddTodoAction, DeleteTodoAction, SearchTodoAction, GetListSearchTodoSuccessAction }