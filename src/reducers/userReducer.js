import {combineReducers} from "redux";
import {
    SIGN_IN_GOOGLE_SUCCESS,
    SIGN_IN_REQUEST_SUCCESS
} from "../actions/userActions";

const user = (state= {}, action) => {
    switch (action.type) {
        case SIGN_IN_GOOGLE_SUCCESS:

            window.localStorage.setItem('token', action.user.token);
            window.localStorage.setItem('user', JSON.stringify(action.user.user));
            window.localStorage.setItem('name', JSON.stringify(action.user.user.name));

            return action.user;

        case  SIGN_IN_REQUEST_SUCCESS:

            window.localStorage.setItem('token', action.data.data.token);
            window.localStorage.setItem('user', JSON.stringify(action.data.data.user));
            window.localStorage.setItem('name', JSON.stringify(action.data.data.user.name));

            return action.data.data;

        default:
            return state;
    }
};


export const usersReducer = combineReducers({
 user
});
