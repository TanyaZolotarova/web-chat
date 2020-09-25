import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { SIGN_IN_GOOGLE_REQUEST, signInGoogleSuccess, signInGoogleError } from '../actions/userActions';
import { login } from '../service/api.service';

function* getCurrentUserGoogle(action) {
    console.log('action ', action)
    try {
        const user = {
            user_name: action.name
        }
        //запрос на сервер, в котором ты отправишь name get("/login", action.name)
        console.log('user ', user)
        const response = yield call(login, action.name);

        // const token = response.token // add to local storage

        yield put(signInGoogleSuccess(response))
    }

    catch (error) {
        console.log(error);
        yield put(signInGoogleError(error))
    }
}

export default function * actionLogin () {
    yield takeLatest(SIGN_IN_GOOGLE_REQUEST, getCurrentUserGoogle)
}
