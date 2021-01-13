import * as constants from './actionTypes';

const initialState = { data: '' };

const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_TOKEN_SUCCESS: {
            if (action.data) {
                console.log(action.data)
                return {
                    ...state,
                    data: action.data.data.token,
                };
            } else return { data: '' }
        }
        case constants.SHOW_ERROR: {
            if (action.data) {
                return {
                    ...state,
                    data: action.data.toString(),
                };
            } else return { data: '' }
        }
        default:
            return state;
    }
};

export default TodoListReducer;