import {combineReducers} from "redux";
import {
    SIGN_IN_GOOGLE_SUCCESS,
    SIGN_IN_REQUEST_SUCCESS, SIGN_OUT, UPDATE_USER_SUCCESS
} from "../actions/userActions";

const initialState = {
    user: {},
    token: ''
}

export const usersReducer = (state= null , action) => {
    switch (action.type) {
        case SIGN_IN_GOOGLE_SUCCESS:
            return {
                ...state,
                ...action.user.user,
                token: action.user.token,
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
            }
        // localStorage.setItem('token', action.data.data.token);
        // localStorage.setItem('user', JSON.stringify(action.data.data.user));


        // return action.data.data;
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                ...action.data,
            }
        case SIGN_OUT:
            return {};
        default:
            return {
                ...state
            };
    }
};



// export const usersReducer = combineReducers({
//     user
// });
