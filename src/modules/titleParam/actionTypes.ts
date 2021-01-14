export const POST_LOGIN = 'titleParam/GET_LIST_TO_DO';
export const GET_TOKEN_SUCCESS = 'titleParam/GET_TOKEN_SUCCESS';
export const SHOW_ERROR = 'titleParam/SHOW_ERROR';

interface PostLoginAction {
    type: typeof POST_LOGIN
    data: { username: string, password: string }
}

export interface User {
    username: string; password: string; token: string;
}
interface GetTokenSuccessAction {
    type: typeof GET_TOKEN_SUCCESS
    data: User
}

interface ShowErrorAction {
    type: typeof SHOW_ERROR
    data: string
}

export interface TitleParamState {
    username: string;
    password: string;
    token: string;
    error: string;
}

export type TitleParam = PostLoginAction | GetTokenSuccessAction | ShowErrorAction