export const SIGN_IN_GOOGLE_REQUEST = '[login] send google nickname from request';
export const SIGN_IN_GOOGLE_SUCCESS = '[login] send google nickname success';
export const SIGN_IN_GOOGLE_ERROR = '[login] send google nickname error';
export const SIGN_IN_REQUEST = '[login] user data from db after login';
export const SIGN_IN_REQUEST_SUCCESS = '[login] user data from db after login success';
export const SIGN_IN_REQUEST_ERROR = '[login] user data from db after login error';


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

