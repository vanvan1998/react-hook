import * as constants from './actionTypes';

export const postLoginAction = (username, password) => ({
    type: constants.POST_LOGIN,
    data: { username, password }
});

export const getTokenSuccessAction = (data) => ({
    type: constants.GET_TOKEN_SUCCESS,
    data: { data }
});

export const showErrorAction = (data) => ({
    type: constants.SHOW_ERROR,
    data: { data }
});