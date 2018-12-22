import React from 'react'
import "../css/chat.css";


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
       <div class="form-style-6">
<h1>Contact Us</h1>
<form>
<input type="text" name="field1" placeholder="Your Name" />
<input type="email" name="field2" placeholder="Email Address" />
<textarea name="field3" placeholder="Type your Message"></textarea>
<input type="submit" value="Send" />
</form>
</div>
      </div>
    )
  }
}


export default Chat
