import {all} from 'redux-saga/effects';
import actionLogin from './login';
import actionLoginDb from './loginDb';
import actionUpdateProfile from "./updateProfile";


export default function* rootSaga() {
    yield all([
        actionLogin(),
        actionLoginDb(),
        actionUpdateProfile()
    ]);
}
