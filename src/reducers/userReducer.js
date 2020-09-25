import {combineReducers} from "redux";
import {
    SIGN_IN_GOOGLE_SUCCESS,
} from "../actions/userActions";



const user = (state= {}, action) => {
    switch (action.type) {
        case SIGN_IN_GOOGLE_SUCCESS:
            return  action.user;

        default:
            return state;
    }
};


export const usersReducer = combineReducers({
 user
});
