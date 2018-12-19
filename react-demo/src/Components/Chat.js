<<<<<<< HEAD
import React from 'react';
// import chat from './image/chat.jpg';
=======
import React from "react";
>>>>>>> d50e0cd37dbca14eccccf79712666b0166d568c8

class Chat extends React.Component {
  render() {
    return (
      <div className="chat">
        <img src={process.env.PUBLIC_URL + "/img/chat.jpg"} alt="" />
      </div>
    );
  }
}

export default Chat;
