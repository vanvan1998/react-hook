import { call, put, takeLatest } from 'redux-saga/effects';
import LoginServices from '../../domain/services/LoginServices';
import * as constants from './actionTypes';
import { getTokenSuccessAction, showErrorAction } from './actions'
import UserDTO from '../../DTO/UserDTO';

function* postLogin(actions: any) {
    try {
        const res = yield call(LoginServices.POSTLoginAPI, actions.data.username, actions.data.password);
        console.log('saga', res.token)
        if (res instanceof UserDTO) {
            yield put(getTokenSuccessAction(res.toJSON()))
        } else {
            yield put(showErrorAction(res.toJSON()))
        }
    } catch (error) {
        console.log(error)
    }
}
export function* watchPostLogin() {
    yield takeLatest(constants.POST_LOGIN, postLogin)
}
