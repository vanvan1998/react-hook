import { TitleParamState, TitleParam, GET_TOKEN_SUCCESS, SHOW_ERROR } from './actionTypes';

const initialState: TitleParamState = {
    username: '',
    password: '',
    token: '',
    error: ''
};

const titleParamReducer = (state = initialState, action: TitleParam) => {
    switch (action.type) {
        case GET_TOKEN_SUCCESS: {
            if (action.data) {
                return {
                    ...state,
                    token: action.data.token,
                };
            } else return { data: '' }
        }
        case SHOW_ERROR: {
            if (action.data) {
                return {
                    ...state,
                    error: action.data,
                };
            } else return { data: '' }
        }
        default:
            return state;
    }
};

export default titleParamReducer;