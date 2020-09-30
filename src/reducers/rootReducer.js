import {combineReducers} from "redux";
import {user} from "./userReducer";
import {chatReducer} from "./chatReducer";


export const rootReducers = combineReducers({
    user: usersReducer,
    chat: chatReducer
});
