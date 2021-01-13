import * as constants from './actionTypes';

export const PostLoginAction = (username, password) => ({
    type: constants.POST_LOGIN,
    data: { username, password }
});

export const GetTokenSuccessAction = (data) => ({
    type: constants.GET_TOKEN_SUCCESS,
    data: { data }
});

export const ShowErrorAction = (data) => ({
    type: constants.SHOW_ERROR,
    data: { data }
});