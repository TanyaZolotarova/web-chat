import React, {useContext, useEffect, useState} from "react";
import MessageListComponent from "./components/messageListComponent";
import connect from "react-redux/lib/connect/connect";
import {LoginContainer} from "./loginContainer";
import Gravatar from 'react-gravatar';
import WebSocketProvider, {WebSocketContext} from "../WebSocket";
import {GearIcon} from '@primer/octicons-react';
import {useForm} from "react-hook-form";
import {updateProfileUserRequest} from "../actions/userActions";
import {useDispatch} from "react-redux";


const ChatContainer = ({}) => {
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm(); // hook writing from form

    const user = JSON.parse(localStorage.getItem('user')) || '';
    const [users, setUsers] = useState([]);
    const [error, setError] = useState({});
    const [chat, setChat] = useState([]);

    const [userName, setName] = useState(user.name || '');
    const [userEmail, setEmail] = useState(user.email || '');
    const [userPassword, setPassword] = useState('');

    const [activeChatID, setActiveChatID] = useState(null);

    const isOnline = true;

    const readOnly = localStorage.getItem("isGoogle");


    const sendData = (data) => {
        socket.emit('editUser', {name: userName});
        dispatch(updateProfileUserRequest({...data, userId: user.id}));
    };

    const chats = [
        {
            id: 1,
            is_group_chat: true,
            chat_name: "cats",
            creator_id: 1,
            image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?r=pg',
            messages: [{message: 'Hello', id: 23, name: '53eeeeeeeeeee4353'},
                {message: 'Hi!', id: 25, name: "eeeeeeeeeee"}]
        },
    ];

    const {socket, connect} = useContext(WebSocketContext);
    // fixme -> socket is null

    useEffect(() => {
        connect();

        // socket.on('connect', () => {
        //     console.log('CONNECTED');
        // });
        // //
        // socket.on('message', (data) => {
        //     console.log('MESSAGE', data);
        //     // send event to backend with type 'message'
        //     socket.emit('message', {'FFFFFFFF': 'UUUUUUUUUUUUUU'});
        // });
    }, []);

    return (
        <div className="body">
            <div id="frame">
                <div id="sidepanel">
                    <div id="profile">
                        <div className="user-profile">
                            <div className="wrap">
                                <img id="profile-img"
                                     src="https://primamedia.gcdn.co/f/main/1937/1936556.jpg?ca2c24aa472396beadfd4a5eb8bf8a22"
                                     className="online"
                                     alt=""
                                     data-toggle="collapse"
                                     data-target="#multiCollapseExample1"
                                     aria-controls="multiCollapseExample1"/>
                                <p> {userName} </p>
                                <i className="fa fa-chevron-down expand-button" aria-hidden="true"/>
                                <div id="status-options">
                                    <ul>
                                        <li id="status-online" className="active"><span className="status-circle"/>
                                            <p>Online</p></li>
                                        <li id="status-offline"><span className="status-circle"/> <p>Offline</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Modal-wrap">


                                <a type="button" data-toggle="modal"
                                   data-target="#staticBackdrop">
                                    <GearIcon size={24}/>
                                </a>

                                <div className="modal fade Modal" id="staticBackdrop" data-backdrop="static"
                                     data-keyboard="false"
                                     tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Настройки</h5>
                                                <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="form-group">
                                                        <fieldset>
                                                            <label htmlFor="formGroupExampleInput1">Name</label>
                                                            <input type="text"
                                                                   className="form-control"
                                                                   name="name"
                                                                   value={userName}
                                                                   onChange={(e)=> setName(e.target.value)}
                                                                   ref={register()}
                                                                   id="formGroupExampleInput1"
                                                                   placeholder="name"/>
                                                        </fieldset>
                                                    </div>
                                                    <div className="form-group">
                                                        <fieldset>
                                                            <label htmlFor="formGroupExampleInput">Email</label>
                                                            <input type="email"
                                                                   name="email"
                                                                   className="form-control"
                                                                   id="formGroupExampleInput"
                                                                   value={userEmail}
                                                                    onChange={(e)=> setEmail(e.target.value)}
                                                                   ref={register({
                                                                       pattern: {
                                                                           value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                                                           message: "Enter a valid email",
                                                                       }
                                                                   })}
                                                                   placeholder="email"
                                                                   readOnly={Boolean(readOnly)}
                                                            />
                                                        </fieldset>
                                                    </div>
                                                    <div className="form-group">
                                                        <fieldset>
                                                            <label htmlFor="formGroupExampleInput2">Password</label>
                                                            <input type="password"
                                                                   name="password"
                                                                   className="form-control"
                                                                    onChange={(e)=> setPassword(e.target.value)}
                                                                   ref={register()}
                                                                   // onChange={}
                                                                   id="formGroupExampleInput2"
                                                                   placeholder=""
                                                                   readOnly={Boolean(readOnly)}
                                                            />
                                                        </fieldset>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                        data-dismiss="modal">Close
                                                </button>
                                                <button type="button" className="btn btn-primary"
                                                        onClick={handleSubmit(sendData)}>
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                            <div className="">
                                <input type="text"
                                       className="form-control"
                                       aria-label="Имя пользователя"
                                       aria-describedby="basic-addon1"
                                       value={userEmail}
                                />
                                <input type="text"
                                       className="form-control space"
                                       aria-label="Имя пользователя"
                                       aria-describedby="basic-addon1"
                                       value={userName}
                                    //on change handle change \\ on enter put edit in DB
                                />
                            </div>
                        </div>
                    </div>
                    <div id="search">
                        <label htmlFor=""><i className="fa fa-search" aria-hidden="true"/></label>
                        <input type="text" placeholder="Поиск"/>
                    </div>
                    <div id="contacts">
                        <ul>
                            {
                                chats.map((chat,) => {
                                    return (
                                        <li className={
                                            chat.id === activeChatID
                                                ? 'contact active'
                                                : "contact"}
                                            onClick={() => {
                                                setActiveChatID(chat.id)
                                            }
                                            }>
                                            <div className="wrap">
                                                <span className={isOnline ? 'contact-status online'
                                                    : 'contact-status offline'}> </span>
                                                <img src={chat.image}
                                                     alt=""/>


                                                <div className="meta">
                                                    <p className="name">
                                                        {chat.is_group_chat ?
                                                            chat.chat_name :
                                                            chat.creator_id
                                                            //name
                                                        }</p>
                                                    <p className="preview"> //some text. Fhow it gets </p>
                                                </div>


                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div id="bottom-bar">
                        <button id="addcontact" data-toggle="modal" data-target="#createChatModal">
                            <span> Создать чат </span>
                        </button>
                    </div>
                </div>
                {activeChatID && <MessageListComponent activeChat={activeChatID}
                                                       chat={chats.find(el => el.id === activeChatID)}/>}
            </div>
        </div>
    );
}

const mapStateToProps = () => {
    return {};
};

export default ChatContainer;

// export default connect(mapStateToProps, {  })(ChatContainer);
// const getChatData = () => {
//     return JSON.parse(localStorage.getItem("chatData"));
// };
// useEffect(() => {
//     fetch("http://192.168.0.109:8000/users")
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 setUsers(result);
//
//                 console.log("users----result", result);
//             },
//             (error) => {
//                 setError(error);
//             }
//         )
// }, []);
