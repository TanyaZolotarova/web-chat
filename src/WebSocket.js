import io from "socket.io-client";
import React, {createContext, useRef, useState} from "react";

export const WebSocketContext = createContext(null)

export default ({ children }) => {
    const [connection, setConnection] = useState(null);

    const connect = () => {
        const token = window.localStorage.getItem('token');
        const SOCKET_IO_URL = `http://localhost:8000/?token=${token}`;
        const socket = io(SOCKET_IO_URL);
        // console.log('Provider socket - ', socket);
        setConnection(socket);
        return socket;
    };

    return (
        <WebSocketContext.Provider value={{socket: connection, connect}}>
            {children}
        </WebSocketContext.Provider>
    );
}