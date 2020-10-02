export const CREATE_CHAT_REQUEST = '[chat] input chat data in bd';
export const CREATE_CHAT_SUCCESS = '[chat] input chat data in bd success';
export const CREATE_CHAT_ERROR = '[chat] input chat data in bd error';

export const creteChatRequest = (data) => ({
   type: CREATE_CHAT_REQUEST,
   data
});

export const createChatSuccess = (data) =>({
    type: CREATE_CHAT_SUCCESS,
    data
});

export const createChat_Error = (error) =>({
    type: CREATE_CHAT_ERROR,
    error
});
