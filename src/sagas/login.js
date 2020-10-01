import { call, delay, put, takeLatest } from 'redux-saga/effects';
import {SIGN_IN_GOOGLE_REQUEST, signInGoogleSuccess, signInGoogleError, SIGN_OUT} from '../actions/userActions';
import { login } from '../service/api.service';

function* getCurrentUserGoogle(action) {
    try {
        const response = yield call(login, action.user);
        yield put(signInGoogleSuccess(response.data))
        console.log(response.data);
        localStorage.setItem('token', response.data.token);

    } catch (error) {
        console.log(error);
        yield put(signInGoogleError(error))
    }


}

function* logOut() {
    localStorage.clear();
}

export default function* actionLogin () {
    yield takeLatest(SIGN_IN_GOOGLE_REQUEST, getCurrentUserGoogle)
    yield takeLatest(SIGN_OUT, logOut)
}
