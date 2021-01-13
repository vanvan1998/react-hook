import { call, put, takeLatest } from 'redux-saga/effects';
import LoginServices from '../../domain/services/LoginServices';
import * as constants from './actionTypes';
import { GetTokenSuccessAction, ShowErrorAction } from './actions'
import UserDTO from '../../DTO/UserDTO';

function* PostLogin(actions: any) {
    try {
        const res = yield call(LoginServices.POSTLoginAPI, actions.data.username, actions.data.password);
        console.log('saga', res.token)
        if (res instanceof UserDTO) {
            yield put(GetTokenSuccessAction(res.toJSON()))
        } else {
            yield put(ShowErrorAction(res))
        }
    } catch (error) {
        console.log(error)
    }
}
export function* WatchPostLogin() {
    yield takeLatest(constants.POST_LOGIN, PostLogin)
}
