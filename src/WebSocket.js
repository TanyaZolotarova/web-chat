import io from "socket.io-client";
import React, {createContext, useRef} from "react";

export const WebSocketContext = createContext(null)

export default ({ children }) => {
    const socketRef = useRef()
    const connect = () => {
        const token = window.localStorage.getItem('token');
        const SOCKET_IO_URL = `http://localhost:8000/?token=${token}`;
        socketRef.current = io(SOCKET_IO_URL);
    };

    return (
        <WebSocketContext.Provider value={{socket: socketRef.current, connect}}>
            {children}
        </WebSocketContext.Provider>
    );
}

// export default ({ children }) => {
//     let socket;
//     let ws;
//
//     // const dispatch = useDispatch();
//
//     const sendMessage = (roomId, message) => {
//     //     const payload = {
//     //         roomId: roomId,
//     //         data: message
//     //     }
//     //     socket.emit("event://send-message", JSON.stringify(payload));
//     //     dispatch(updateChatLog(payload));
//     };
//
//     if (!socket) {
//         socket = io(SOCKET_IO_URL);
//
//     //     socket.on("event://get-message", (msg) => {
//     //         const payload = JSON.parse(msg);
//     //         dispatch(updateChatLog(payload));
//     //     })
//
//         ws = {
//             socket: socket,
//             sendMessage
//         }
//     }
//
//     return (
//         <WebSocketContext.Provider value={ws}>
//             {children}
//         </WebSocketContext.Provider>
//     );
// }
