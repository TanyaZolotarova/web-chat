import React, {useEffect, useState} from "react";
import connect from "react-redux/lib/connect/connect";
import {useDispatch, useSelector} from "react-redux";


function MessageListComponent({activeChat, chat}) {

    const [message, setMessage] = useState('');
    // const dispatch = useDispatch()
    // const messages = useSelector((store) => store.messages)
    const messages = [{message: 'Hello', id: 1, name: 'Anna'} , {message: 'Hi!', id: 2, name: "Andre"}];

    const handleChange = (event) => {
        const {target} = event;
        setMessage( target.value
        )
        console.log("message", message)
    }

    const handleSubmit = () => {
        const newMessage = messages.push({
            message: message,
            id: 1,
            name: 'Garry'
            //match.params.user.name
            //match.params.user.id
        })

        setMessage('')

        console.log("newMessage", newMessage)
        console.log("messages", messages)

    }

    return (
        <div className="content">
            <div className="contact-profile">
                <img src="//from db" alt=""/>
                <p>
                    {chat.chat_name}
                </p>
            </div>
            <div className="messages">

                {
                    chat.messages.map((m, ) => {

                        return (
                            <ul >
                                <li className="replies" >
                                    <img src="https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg" alt="" />
                                    <p className="p"><span className="messages-span" > {m.name}:  </span> {m.message}
                                    </p>
                                </li>
                            </ul>
                        );
                    })}

            </div>
            <div className="message-input">
                <div className="wrap">
                    <input
                        type="text"
                        placeholder="Напишите сообщение..."
                        name='message'
                        onChange={handleChange}
                        maxLength="500"
                        value={ message }

                    />
                    <button onClick={handleSubmit}>
                        <span className="material-icons pb-2">send</span>
                    </button>

                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        // chats: chatsSelector(state),
    };
};

// export default connect(mapStateToProps, {  })(MessageListComponent);
export default MessageListComponent;
