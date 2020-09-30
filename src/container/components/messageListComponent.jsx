import React, {useContext, useEffect, useRef, useState} from "react";
import connect from "react-redux/lib/connect/connect";
import {WebSocketContext} from "../../WebSocket";
// import socket from "../../WebSocket";
// import {useDispatch, useSelector} from "react-redux";
// import {CancelTokenStatic as props} from "axios";

function MessageListComponent({chat}) {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState([]); // chatId, email, name, text
    const {socket} = useContext(WebSocketContext);
//
// console.log("chat", chat);

    const onMessageSubmit = () => {
        socket.emit('message', {message: currentMessage, chatId: chat.id});
        setCurrentMessage('');
    };

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            onMessageSubmit();
            setCurrentMessage('');
        }
    }

    useEffect(() => {
        socket.on('message', (message) => {

           // if(chat.id === message.chatId) {
            setMessages((oldChat) => [...oldChat, message]);
        });

        socket.emit('getChatHistory', {chatId: chat.id});

        socket.on('chatHistory', (messages) => {
            setMessages(messages);

        });
    }, []);


    return (
        <div className="content">
            <div className="contact-profile margin-bottom10">
                <img src="//from db" alt=""/>
                <p>
                    {chat.chat_name}
                </p>
            </div>
            <div className="messages">
                { messages.map((m) => {
                    return chat.id === m.chatId ? ( /* todo remove */
                    <ul >
                            <li className="replies" >
                                <img src="https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg" alt="" />
                                <p className="p">
                                    <span className="name-block">{m.name}: </span>
                                    <span className="messages-span" > </span> {m.message}
                                </p>
                            </li>
                        </ul>
                    ) : null;
                })
                }
            </div>

            <div className="message-input">
                <div className="wrap">
                    <input
                        type="text"
                        placeholder="Type message..."
                        name='text'
                        maxLength="500"
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />

                    <button onClick={onMessageSubmit}>
                        <span className="material-icons pb-2 icon-size">send</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MessageListComponent;

// const renderChat = () => {
//     if (!chat.length) {
//         return null;
//     }
//     return chat.map(({name, text}, index) => (
//         <div key={index}>
//             {/*<h3>*/}
//             {/*    {name}: <span>{message}</span>*/}
//             {/*</h3>*/}
//
//             <ul>
//                 <li className="replies">
//                     <img src="https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg" alt=""/>
//                     <p className="p"><span className="name-block">{index.name}:</span>
//                         <span className="messages-span"> </span> {index.text}
//                     </p>
//                 </li>
//             </ul>
//
//         </div>
//     ))
// };


// const [message, setMessage] = useState('');
// const messages = [{message: 'Hello', id: 1, name: 'Anna'} , {message: 'Hi!', id: 2, name: "Andre"}];

// const handleChange = (event) => {
//     const {target} = event;
//     setMessage( target.value
//     )
//     console.log("[=== message =====>]", message);
// }
// const handleSubmit = () => {
//     const newMessage = messages.push({
//         message: message,
//         id: 1,
//         name: 'Garry'
//         //match.params.user.name
//         //match.params.user.id
//     })
//     setMessage('')
//     console.log("newMessage", newMessage);
//     console.log("messages", messages);
// }

// const inputEl = useRef({text: '', id: '', name: ''});
// const [connection, setConnection] = useState(null); // fixme

// useEffect(() => {
// setConnection(socket);

// return () => {
// Очистить подписку
// };// on 'event' - listen  <== server
// }, [])   // write here dependencies from handlers

// const handleMessage = (messData) => {
//     console.log('===[ messData ]=====>', messData);
//     setChat([...chat, {...messData}])
//     console.log("========[ AFTER setChat ]=======", chat);
// };
// socket.on('add_message', handleMessage);
// const onTextChange = e => {
//     console.log('ON TEXT CHANGE',)                                      //1 переделать
//     setMessage({...message, [e.target.name]: e.target.value});
//     console.log('===[ message ]=====>', message);
// };