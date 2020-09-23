import {all} from 'redux-saga/effects';
import actionLogin from './login';


export default function* rootSaga() {
    yield all([
        actionLogin(),
    ]);
}