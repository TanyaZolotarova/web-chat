import React, {useEffect, useState} from "react";
import MessageListComponent from "./components/messageListComponent";
import connect from "react-redux/lib/connect/connect";
import {LoginContainer} from "./loginContainer";


const ChatContainer = ({  }) => {

    const [users, setUsers] = useState([]);

    const [error, setError] = useState({});

    const [chat, setChat] = useState([]);

    const [activeChatID, setActiveChatID] = useState(null);

    const getChatData = () => {
        return JSON.parse(localStorage.getItem("chatData"));
    };

    const isOnline = true;

    const chats = [
        {id: 1,
            is_group_chat: true,
            chat_name: "cats",
            creator_id: 1,
            image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?r=pg',
            messages: [{message: 'Hello', id: 23, name: '53eeeeeeeeeee4353'} ,
                {message: 'Hi!', id: 25, name: "eeeeeeeeeee"}]},
        {id: 2,
            is_group_chat: false,
            chat_name: "Root",
            creator_id: 2,
            image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?r=pg',
            messages:
                [{message: 'Hello', id: 1, name: '534353'} ,
                    {message: 'Hi!', id: 2, name: "123123"}] }];


    useEffect(() => {
        fetch("http://192.168.0.109:8000/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setUsers(result);

                    console.log("users----result", result);
                },
                (error) => {
                    setError(error);
                }
            )
    }, []);

    return(
        <div className="body">
            <div id="frame">
                <div id="sidepanel">
                    <div id="profile">
                        <div className="wrap">
                            <img id="profile-img" src="https://primamedia.gcdn.co/f/main/1937/1936556.jpg?ca2c24aa472396beadfd4a5eb8bf8a22" className="online"
                                 alt="" data-toggle="collapse" data-target="#multiCollapseExample1" aria-controls="multiCollapseExample1"/>
                            <p>// this user name from db </p>
                            <i className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
                            <div id="status-options">
                                <ul>
                                    <li id="status-online" className="active"><span className="status-circle"></span>
                                        <p>Online</p></li>
                                    <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
                                </ul>
                            </div>
                            {/*редактирование профиля */}
                            {/*<div id="expanded">*/}
                            {/*    <label htmlFor="twitter"></label>*/}
                            {/*    <input name="twitter" type="text" value="mikeross"/>*/}
                            {/*    <label htmlFor="twitter"></label>*/}
                            {/*    <input name="twitter" type="text" value="ross81"/>*/}
                            {/*    <label htmlFor="twitter"></label>*/}
                            {/*    <input name=".." type="text" value="..."/>*/}
                            {/*</div>*/}
                        </div>
                        {/*Модальное окно редактирования юзера*/}
                        {/*<div className="modal fade" id="changeProfileModal" tabIndex="-1" role="dialog"*/}
                        {/*     aria-labelledby="exampleModalLabel" aria-hidden="true">*/}
                        {/*    <div className="modal-dialog">*/}
                        {/*        <div className="modal-content">*/}
                        {/*            <div className="modal-header">*/}
                        {/*                <h5 className="modal-title" id="exampleModalLabel">Создать чат</h5>*/}
                        {/*                <button type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
                        {/*                    <span aria-hidden="true">&times;</span>*/}
                        {/*                </button>*/}
                        {/*            </div>*/}
                        {/*            <div className="modal-body">*/}
                        {/*                ...*/}
                        {/*            </div>*/}
                        {/*            <div className="modal-footer">*/}
                        {/*                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>*/}
                        {/*                <button type="button" className="btn btn-primary">Save changes</button>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                            <div className="">
                                <input type="text" className="form-control"
                                       aria-label="Имя пользователя" aria-describedby="basic-addon1"/>
                                <input type="text" className="form-control space"
                                       aria-label="Имя пользователя" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>
                    <div id="search">
                        <label htmlFor=""><i className="fa fa-search" aria-hidden="true"></i></label>
                        <input type="text" placeholder="Поиск"/>
                    </div>
                    <div id="contacts">
                        <ul>
                            {
                                chats.map((chat, ) => {
                                    return(
                                        <li className = { chat.id === activeChatID ? 'contact active' : "contact"}
                                            onClick={() => {setActiveChatID(chat.id)}} >
                                            <div className="wrap">
                                                <span className= {isOnline ? 'contact-status online' : 'contact-status offline'}> </span>
                                                <img src={chat.image}
                                                     alt=""/>
                                                <div className="meta">
                                                    <p className="name">{chat.is_group_chat ? chat.chat_name : chat.creator_id}</p>
                                                    <p className="preview"> //some text. how it gets </p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div id="bottom-bar">
                        <button id="addcontact" data-toggle="modal" data-target="#createChatModal"><span> Создать чат </span>
                        </button>
                    </div>
                </div>
                {activeChatID && <MessageListComponent activeChat={activeChatID} chat={chats.find(el => el.id === activeChatID)}/>}
                            </div>
                            </div>
                            );
}

const mapStateToProps = () => {
    return {
    };
};

export default ChatContainer;

// export default connect(mapStateToProps, {  })(ChatContainer);