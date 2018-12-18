import React from "react";

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
