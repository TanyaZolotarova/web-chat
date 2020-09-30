import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { SIGN_IN_GOOGLE_REQUEST, signInGoogleSuccess, signInGoogleError } from '../actions/userActions';
import { login } from '../service/api.service';

function* getCurrentUserGoogle(action) {
    try {
        const response = yield call(login, action.user);
        yield put(signInGoogleSuccess(response.data))

        localStorage.setItem('token', response.data.token);

    } catch (error) {

        yield put(signInGoogleError(error))
    }


}

export default function* actionLogin () {
    yield takeLatest(SIGN_IN_GOOGLE_REQUEST, getCurrentUserGoogle)
}