import {combineReducers} from "redux";
import {user} from "./userReducer";


export const rootReducers = combineReducers({
    user,
});