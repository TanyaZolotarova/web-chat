import React, {useContext, useEffect, useRef, useState} from "react";
import connect from "react-redux/lib/connect/connect";
import {WebSocketContext} from "../../WebSocket";
import Gravatar from 'react-gravatar'
// import socket from "../../WebSocket";
// import {useDispatch, useSelector} from "react-redux";
// import {CancelTokenStatic as props} from "axios";


function MessageListComponent({chat, users }) {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState([]); // userId, chatId, email, name, text
    const {socket} = useContext(WebSocketContext);

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

    const scrollDown = (e) => {
        document.querySelector('li.replies:nth-last-child(1)').scrollIntoView();
    };

    // const getUser = (id) => users.find((user) => user.id === id);

    useEffect(() => {
        socket.on('message', (message) => {
            console.log('NEW MESSAGE!!!', JSON.stringify(message));

            if(chat.id === message.chatId) {
                setMessages((oldChat) => [...oldChat, message]);

           }
        });

        socket.emit('getChatHistory', {chatId: chat.id});

        socket.on('chatHistory', (messagesList) => {
            setMessages(messagesList);
        });

        return () => {
            socket.off('message');
        };
    }, [chat.id]);

    return (
        <div className="content" onLoad={scrollDown}>
            <div className="contact-profile margin-bottom10">
                <img src="//from db" alt=""/>
                <p>
                    {chat.chat_name}
                </p>
            </div>
            <div className="messages pb-4">
                <ul>
                    { messages.map((m, index) => {
                        return  (
                            <li key={m.id} className="replies">
                                <img src="https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg" alt="" />
                                <p className="p">
                                    <span className="name-block">{users[m.userId].name}: </span>
                                    {/*<span className="name-block">{ getUser(m.userId).name }: </span>*/}
                                    <span className="messages-span">{m.message}</span>
                                </p>
                            </li>
                        );
                    })
                    }
                </ul>
            </div>

            <div className="message-input mt-2">
                <div className="wrap">
                    <input
                        type="text"
                        placeholder="Type message..."
                        name='text'
                        maxLength="500"
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        autoComplete="off"
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
