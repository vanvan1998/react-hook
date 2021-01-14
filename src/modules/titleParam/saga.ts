import { POST_LOGIN } from './actionTypes';
import { getTokenSuccess, showError } from './actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import LoginServices from '../../domain/services/LoginServices';
import UserDTO from '../../DTO/UserDTO';


function* postLoginWorker(actions: any) {
    try {
        const res = yield call(LoginServices.POSTLoginAPI, actions.data.username, actions.data.password);
        if (res instanceof UserDTO) {
            yield put(getTokenSuccess(res))
        } else {
            yield put(showError(res.message))
        }
    } catch (error) {
        console.log(error)
    }
}
export function* watchPostLogin() {
    yield takeLatest(POST_LOGIN, postLoginWorker)
}
