import {all} from 'redux-saga/effects';
import actionLogin from './login';
import actionLoginDb from './loginDb';


export default function* rootSaga() {
    yield all([
        actionLogin(),
        actionLoginDb()
    ]);
}
