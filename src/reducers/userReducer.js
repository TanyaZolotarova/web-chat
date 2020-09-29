import {combineReducers} from "redux";
import {
    SIGN_IN_GOOGLE_SUCCESS,
    SIGN_IN_REQUEST_SUCCESS
} from "../actions/userActions";

const user = (state= {}, action) => {
    switch (action.type) {
        case SIGN_IN_GOOGLE_SUCCESS:
            return action.user;

        case  SIGN_IN_REQUEST_SUCCESS:

            localStorage.setItem('token', action.data.data.token);
            localStorage.setItem('user', JSON.stringify(action.data.data.user));
            return action.data.data;

        default:
            return state;
    }
};


export const usersReducer = combineReducers({
 user
});
