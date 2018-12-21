import React from 'react'

class Chat extends React.Component {
  state = {
    showResult : false,
  }
  showChat = () => {
    const {showResult} = this.state;
    if(showResult === true){
      this.setState({showResult:false})
    }
    else{
      this.setState({showResult: true})

    }
  }
  render () {
    return (
      <div className='chat-container'>

        {this.state.showResult &&   <ChatResult /> }
        <div className='chat' onClick={this.showChat}>
          <img src={process.env.PUBLIC_URL + '/img/chat.png'} alt='' />
        </div>
      </div>
    )
  }
}


class ChatResult extends React.Component {
  render () {
    return (
      <div className='chat--text'>
        <h1>Hello</h1>
      </div>
    )
  }
}


export default Chat
