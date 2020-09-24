export const SIGN_IN_GOOGLE_REQUEST = '[login] send google email & id & name from request';
export const SIGN_IN_GOOGLE_SUCCESS = '[login] send google email & id & name success';
export const SIGN_IN_GOOGLE_ERROR = '[login] send google email & id & name error';


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

