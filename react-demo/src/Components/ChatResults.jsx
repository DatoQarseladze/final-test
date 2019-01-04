import React from 'react'

class ChatResults extends React.Component {
  

  render () {
    return (
      <div className='chat-container'>
        <div className='chat' onClick={this.chatForm}>
          <img src={process.env.PUBLIC_URL + '/img/chat.png'} alt='' />
        </div>
        <div className='chat--text'>
          <h1>Hello</h1>
        </div>
      </div>
    )
  }
}

export default Chat
