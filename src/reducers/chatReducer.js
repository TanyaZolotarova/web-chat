import {combineReducers} from "redux";
import {CREATE_CHAT_SUCCESS} from "../actions/chatActions";

const initialState ={
    chat_name: {}
}

const chatRoom = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CHAT_SUCCESS:
            return{
                ...state,
                chatRoom: action.chatRoom.name
            }
            return action.chatRoom;
        default:
            return {
                ...state
            };
    }
}

export const chatReducer = combineReducers({
    chatRoom
});

