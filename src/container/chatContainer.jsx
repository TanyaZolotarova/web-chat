import React, {useContext, useEffect, useState} from "react";
import MessageListComponent from "./components/messageListComponent";
import {WebSocketContext} from "../WebSocket";
import {GearIcon} from '@primer/octicons-react';
import {useForm} from "react-hook-form";
import {updateProfileUserRequest} from "../actions/userActions";
import {useDispatch, useSelector} from "react-redux";


const ChatContainer = ({}) => {

    const dispatch = useDispatch();
    const {register, handleSubmit, errors } = useForm(); // hook writing from form
    const {socket,connect} = useContext(WebSocketContext);

    const [user, setUser] = useState({
        name: '',
        email: ''
    });


    const [chats, setChats] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState({});
    const [chat, setChat] = useState([]);

    const [userName, setName] = useState(user.name || '');
    const [userEmail, setEmail] = useState( '');

    const [userPassword, setPassword] = useState('');
    const [readOnly, setReadOnly] = useState(false);

    const [activeChatID, setActiveChatID] = useState(null);

    const userSelector = useSelector((store) => store.user.user.user.user);

    const isOnline = true;
    const chatImage = 'data:image/jpeg;base64,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'

    const sendData = (data) => {
        socket.emit('editUser', {name: userName});
        dispatch(updateProfileUserRequest({...data, userId: user.id}));
    };

    useEffect(() => {
        if(userSelector) {
            setReadOnly(Boolean(userSelector.googleId));
        }

        const socket = connect();

        socket.on('connected', (user) => {
            setUser(user);
        });

        socket.on('chatsList', (chatslist) => {
            console.log(chatslist);
            setChats(chatslist);
        });
    }, [userSelector, readOnly]);

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
                                <p> {user.name} </p>
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
                                                                   value={user.name}
                                                                   onChange={(e) => setUser({
                                                                       ...user,
                                                                       name: e.target.value
                                                                   })}
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
                                                                   value={user.email}
                                                                   onChange={(e) => setUser({...user, email: e.target.value})}
                                                                   ref={register({
                                                                       pattern: {
                                                                           value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                                                           message: "Enter a valid email",
                                                                       }

                                                                   })}
                                                                   placeholder="email"
                                                                   readOnly={readOnly}
                                                            />
                                                            {errors.email && <p className="error error-email error-staff">{errors.email.message}</p>}
                                                        </fieldset>
                                                    </div>
                                                    <div className="form-group">
                                                        <fieldset>
                                                            <label htmlFor="formGroupExampleInput2">Password</label>
                                                            <input type="password"
                                                                   name="password"
                                                                   className="form-control"
                                                                   onChange={(e) => setPassword(e.target.value)}
                                                                   ref={register()}
                                                                // onChange={}
                                                                   id="formGroupExampleInput2"
                                                                   readOnly={readOnly}
                                                            />
                                                        </fieldset>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="modal-footer">
                                                <button type="button"
                                                        className="btn btn-secondary"
                                                        data-dismiss="modal"
                                                >Close
                                                </button>

                                                <button type="button"
                                                        className="btn btn-primary"
                                                        data-dismiss="modal"
                                                        onClick={handleSubmit(sendData)}
                                                >Edit
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
                                       value={user.email}
                                />
                                <input type="text"
                                       className="form-control space"
                                       aria-label="Имя пользователя"
                                       aria-describedby="basic-addon1"
                                       value={user.name}
                                />
                                <button
                                    className='mt-2 btn btn-sm btn-info'
                                    onClick={() => {
                                    window.localStorage.clear()
                                    }}>
                                    Logout
                                </button>

                            </div>
                        </div>
                    </div>
                    <div id="search">
                        <label htmlFor="">
                            <i className="fa fa-search"
                               aria-hidden="true"
                            />
                        </label>
                        <input type="text"
                               placeholder="Поиск"
                        />
                    </div>
                    <div id="contacts">
                        <ul>
                            {
                                chats.map((chat) => {
                                    return (
                                        <li
                                            key={chat.id}
                                            className={
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
                                                <img src={chatImage}
                                                     alt=""/>


                                                <div className="meta">
                                                    <p className="name">
                                                        {chat.is_group_chat ?
                                                            chat.chat_name :
                                                            chat.creator_id

                                                        }</p>
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
                    <div className="modal fade" id="createChatModal" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Название чата"
                                               aria-label="Имя пользователя" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Участники:"
                                               aria-label="Имя пользователя" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {activeChatID &&
                <MessageListComponent
                    chat={chats.find(el => el.id === activeChatID)}
                />}
            </div>
        </div>
    );
}

export default ChatContainer;
