import {combineReducers} from "redux";
import {user, usersReducer} from "./userReducer";
import {chatReducer} from "./chatReducer";


export const rootReducers = combineReducers({
    user: usersReducer,
    chat: chatReducer
});
