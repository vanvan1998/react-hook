import {User, TitleParam, POST_LOGIN, GET_TOKEN_SUCCESS, SHOW_ERROR } from './actionTypes';

export function postLogin(username: string, password: string): TitleParam {
    return {
        type: POST_LOGIN,
        data: { username, password }
    }
};

export function getTokenSuccess(data: User): TitleParam {
    return {
        type: GET_TOKEN_SUCCESS,
        data: data
    }
}

export function showError(error: string): TitleParam {
    return {
        type: SHOW_ERROR,
        data: error
    }
};