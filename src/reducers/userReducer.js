import {combineReducers} from "redux";
import {
    SIGN_IN_GOOGLE_SUCCESS,
    SIGN_IN_REQUEST_SUCCESS, SIGN_OUT, UPDATE_USER_SUCCESS
} from "../actions/userActions";

const initialState = {
    isLogged: Boolean(localStorage.getItem('token')),
}

export const user = (state= initialState , action) => {
    switch (action.type) {
        case SIGN_IN_GOOGLE_SUCCESS:
            return {
                ...state,
                ...action.user.user,
                token: action.user.token,
                isLogged: true,
            }
            // console.log(action.user)
            // window.localStorage.setItem('token', action.user.token);
            // window.localStorage.setItem('user', JSON.stringify(action.user.user));
            // window.localStorage.setItem('name', JSON.stringify(action.user.user.name));
            // window.localStorage.setItem('isGoogle', true);

           // return action.user;

        case  SIGN_IN_REQUEST_SUCCESS:
            console.log('SIGN_IN_REQUEST_SUCCESS',action)
            return {
                ...state,
                ...action.data.user,
                token: action.data.token,
                isLogged: true,
            }


        // return action.data.data;
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                ...action.data,
            }
        case SIGN_OUT:
            return {
                isLogged: false,
            };
        default:
            return {
                ...state
            };
    }
};



// export const usersReducer = combineReducers({
//     user
// });
