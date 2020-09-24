import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { SIGN_IN_GOOGLE_REQUEST, signInGoogleSuccess, signInGoogleError } from '../actions/userActions';
import { login } from '../service/api.service';

function* getCurrentUserGoogle(action) {
    console.log('action ', action)
    try {

        const user = {
            email: action.user.email,
            googleId: action.user.id,
            name: action.user.name,
        }

        //add to response action.google.Id
        console.log('user ', user)
        const response = yield call(login, user);

        // const token = response.token \\ add to lockal storage

        yield put(signInGoogleSuccess(response))
    }

    catch (error) {
        console.log(error);
        yield put(signInGoogleError(error))
    }


}

export default function* actionLogin () {
    yield takeLatest(SIGN_IN_GOOGLE_REQUEST, getCurrentUserGoogle)
}