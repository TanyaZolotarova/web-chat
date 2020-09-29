export const SIGN_IN_GOOGLE_REQUEST = '[login] send google nickname from request';
export const SIGN_IN_GOOGLE_SUCCESS = '[login] send google nickname success';
export const SIGN_IN_GOOGLE_ERROR = '[login] send google nickname error';
export const SIGN_IN_REQUEST = '[login] user data from db after login';
export const SIGN_IN_REQUEST_SUCCESS = '[login] user data from db after login success';
export const SIGN_IN_REQUEST_ERROR = '[login] user data from db after login error';

export const UPDATE_USER_REQUEST = '[update] update user data request';
export const UPDATE_USER_SUCCESS = '[update] update user data success';
export const UPDATE_USER_ERROR = '[update] update user data error';

export const signInGoogleRequest = (user) => ({
    type: SIGN_IN_GOOGLE_REQUEST,
    user
});


export const signInGoogleSuccess = (user) => ({
    type: SIGN_IN_GOOGLE_SUCCESS,
    user
});

export const signInGoogleError = (error) => ({
    type: SIGN_IN_GOOGLE_ERROR,
    error
});

export const signInRequest = (data) => ({
    type: SIGN_IN_REQUEST,
    data
})

export const signInRequestSuccess = (data) => ({
    type: SIGN_IN_REQUEST_SUCCESS,
    data
})

export const signInRequestError = (error) => ({
    type: SIGN_IN_REQUEST_ERROR,
    error
});

export const updateProfileUserRequest = (data) => ({
    type: UPDATE_USER_REQUEST,
    data
});


export const updateProfileUserSuccess = (data) => ({
    type: UPDATE_USER_SUCCESS,
    data
});

export const updateProfileUserError = (error) => ({
    type: UPDATE_USER_ERROR,
    error
});