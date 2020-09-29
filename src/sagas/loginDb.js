import { call, delay, put, takeLatest } from 'redux-saga/effects';
import {
    SIGN_IN_REQUEST,
    signInRequestSuccess,
    signInRequestError, signInGoogleSuccess,
} from '../actions/userActions';
import {login, loginDb} from '../service/api.service';

function* getCurrentUser (action) {

    try {
        const user = {
            email: action.data.email,
            password: action.data.password,
        }
        const response = yield call(loginDb, action.data);

        yield put(signInRequestSuccess(response))

    } catch (error) {
        yield put(signInRequestError(error))
    }
}

export default function * actionLoginDb () {
    yield takeLatest(SIGN_IN_REQUEST, getCurrentUser)
}

