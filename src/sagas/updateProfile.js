import {call, put, takeLatest} from 'redux-saga/effects';
import {
    UPDATE_USER_REQUEST, updateProfileUserError, updateProfileUserSuccess,
} from '../actions/userActions';
import {updateProfile} from '../service/api.service';

function* updateUserProfile(action) {
    try {
        const response = yield call(updateProfile, action.data);
        yield put(updateProfileUserSuccess(response.data))

    } catch (error) {
        yield put(updateProfileUserError(error))
    }
}


export default function* actionUpdateProfile() {
    yield takeLatest(UPDATE_USER_REQUEST, updateUserProfile)
}
