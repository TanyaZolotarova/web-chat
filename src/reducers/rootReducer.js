import {combineReducers} from "redux";
import {usersReducer} from "./userReducer";


export const rootReducers = combineReducers({
    user: usersReducer,

});