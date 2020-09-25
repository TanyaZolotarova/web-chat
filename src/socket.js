import io from "socket.io-client";
const SOCKET_IO_URL = "http://localhost:8000";
const socket = io(SOCKET_IO_URL);

socket.on('connect', () => {
    console.log("[ socket connection ===> OPEN <===]");
});

socket.on('disconnect', () => {
    console.log("[ socket connection ===> CLOSED <===]");
});

export default socket;
