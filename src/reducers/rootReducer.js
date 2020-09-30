import {combineReducers} from "redux";
import {usersReducer} from "./userReducer";
import {chatReducer} from "./chatReducer";


export const rootReducers = combineReducers({
    user: usersReducer,
    chat: chatReducer
});
