export const SIGN_IN_GOOGLE_REQUEST = '[login] send google nickname from request';
export const SIGN_IN_GOOGLE_SUCCESS = '[login] send google nickname success';
export const SIGN_IN_GOOGLE_ERROR = '[login] send google nickname error';


export const signInGoogleRequest = (name) => ({
    type: SIGN_IN_GOOGLE_REQUEST,
    name
});


export const signInGoogleSuccess = (user) => ({
    type: SIGN_IN_GOOGLE_SUCCESS,
    user
});

export const signInGoogleError = (error) => ({
    type: SIGN_IN_GOOGLE_ERROR,
    error
});

