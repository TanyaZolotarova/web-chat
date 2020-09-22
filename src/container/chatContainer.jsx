import React, {useEffect, useState} from "react";

const ChatContainer = ({}) => {

    const [message, setMessage] = useState({});

    const [users, setUsers] = useState([]);

    console.log("users", users);

    const [error, setError] = useState({});

    const getChatData = () => {
        return JSON.parse(localStorage.getItem("chatData"));
    };

    const messages = [{message: 'Hello', id: 1, name: 'Anna'} , {message: 'Hi!', id: 2, name: "Andre"}]

    const handleChange = (event) => {
        const {target} = event;
        setMessage( {...message, [target.name]: target.value}
        )
    }

    const handleSubmit = () => {
    }

    useEffect(() => {
        fetch("http://localhost:8000/users")
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
                                 alt=""/>
                            <p>// this user name from db </p>
                            <i className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
                            <div id="status-options">
                                <ul>
                                    <li id="status-online" className="active"><span className="status-circle"></span>
                                        <p>Online</p></li>
                                    <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
                                    <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
                                    <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
                                </ul>
                            </div>
                            {/*редактирование профиля */}
                            <div id="expanded">
                                <label htmlFor="twitter"></label>
                                <input name="twitter" type="text" value="mikeross"/>
                                <label htmlFor="twitter"></label>
                                <input name="twitter" type="text" value="ross81"/>
                                <label htmlFor="twitter"></label>
                                <input name=".." type="text" value="..."/>
                            </div>
                        </div>
                    </div>
                    <div id="search">
                        <label htmlFor=""><i className="fa fa-search" aria-hidden="true"></i></label>
                        <input type="text" placeholder="Найдите человека или чат"/>
                    </div>
                    <div id="contacts">
                        <ul>
                            <li className="contact">
                                <div className="wrap">
                                    <span className="contact-status online"></span>
                                    <img src="https://primamedia.gcdn.co/f/main/1937/1936556.jpg?ca2c24aa472396beadfd4a5eb8bf8a22" alt=""/>
                                    <div className="meta">
                                        <p className="name">Вася</p>
                                        <p className="preview">Как дела? </p>
                                    </div>
                                </div>
                            </li>
                            <li className="contact active">
                                <div className="wrap">
                                    <span className="contact-status busy"></span>
                                    <img src="https://primamedia.gcdn.co/f/main/1937/1936556.jpg?ca2c24aa472396beadfd4a5eb8bf8a22" alt=""/>
                                    <div className="meta">
                                        <p className="name">Алиса Викторовна</p>
                                        <p className="preview"> Ты плохой человек. </p>
                                    </div>
                                </div>
                            </li>
                            <li className="contact">
                                <div className="wrap">
                                    <span className="contact-status away"></span>
                                    <img src="https://primamedia.gcdn.co/f/main/1937/1936556.jpg?ca2c24aa472396beadfd4a5eb8bf8a22" alt=""/>
                                    <div className="meta">
                                        <p className="name">Катя</p>
                                        <p className="preview">Привет </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="bottom-bar">
                        <button id="addcontact"><span> Создать чат </span>
                        </button>
                    </div>
                </div>
                <div className="content">
                    <div className="contact-profile">
                        <img src="//from db" alt=""/>
                        <p>
                            // this chat-name from DB
                            {/*Chat Room: {getChatData().chat_name}. Chat Handle:{" "}*/}
                            //             {/*{getChatData().handle}*/}
                        </p>
                    </div>
                    <div className="messages">
                        {
                            //if id !== this.user id , if is == this.user id  <li className="sent">
                            //                                                 <img src="//img from db" alt=""/>
                            //                                                 <p> {m.name} </p>
                            //                                                 <p>How the hell am I supposed to get a jury to believe you when I am not even sure that
                            //                                                     I do?!</p>
                            //                                             </li>

                            messages.map((m, ) => {
                                return (
                                    <ul>
                                        <li className="replies">
                                            <img src="https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg" alt=""/>
                                            <p className="p"> <span className="messages-span"> {m.name}:  </span> {m.message}</p>
                                        </li>
                                    </ul>
                                        );
                                        })}

                                    </div>
                                <div className="message-input">
                                    <div className="wrap">
                                        <input type="text" placeholder="Напишите сообщение..." onChange={handleChange}/>
                                        <button>  <span className="material-icons icon-bar md-18">send</span> </button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                            );
}

 export default ChatContainer;