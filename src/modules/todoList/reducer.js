import * as constants from './actionTypes';

const initialState = { todoList: null };

const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_LIST_TO_DO_SUCCESS: {
            var data = JSON.parse(localStorage.getItem('todoList'))
            if (data) {
                return {
                    ...state,
                    todoList: data,
                };
            } else return { todoList: [] }
        }
        case constants.GET_LIST_SEARCH_TO_DO_SUCCESS: {
            return {
                ...state,
                todoList: action.data.todoList,
            };
        }
        case constants.ADD_TO_DO: {
            const newList = [...state.todoList, action.data.todo];
            localStorage.setItem('todoList', JSON.stringify(newList))
            return { ...state, todoList: newList };
        }
        case constants.DELETE_TO_DO: {
            const newList = [...state.todoList];
            newList.splice(newList.indexOf(action.data.todo), 1)
            localStorage.setItem('todoList', JSON.stringify(newList))
            return { ...state, todoList: newList };
        }
        default:
            return state;
    }
};

export default TodoListReducer;