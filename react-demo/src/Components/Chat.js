import React from 'react';
import chat from './image/chat.jpg';

class Chat extends React.Component {
    render() {
        return (
            <div className="chat">
                <img src={chat} alt="" />
            </div>
        )
    }
}

export default Chat;