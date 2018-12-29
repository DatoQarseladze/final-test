import React from 'react'
import "../css/chat.css";
import axios from 'axios'
import Swal from 'sweetalert2'

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
  chatForm = e => {
    e.preventDefault();
    let message = e.currentTarget.field3.value;

    axios
    .post('http://localhost:5000/chat', {message: message})
    .then(res =>{
      // will alert about succesfully action
      if(res.data.toString().length > 0){
       Swal({
          title: 'We will contact you soon',
          width: 600,
          padding: '3em',
          backdrop: `
            rgba(0,0,123,0.4)
            center left
            no-repeat
          `
        })
        setTimeout(function () {
          window.location.href = "support"; //will redirect to your support page 
       }, 3000);
      }
    })
    .catch(err =>{
      console.log(err);
    }) 
  }
  render () {
    return (
      <div className='chat--text'>
       <div className="form-style-6">
<h1>Contact Us</h1>
<form onSubmit={this.chatForm}>
<input  type="text" name="field1" placeholder="Your Name" />
<input type="email" name="field2" placeholder="Email Address" />
<textarea ref={this.text} name="field3" placeholder="Type your Message"></textarea>
<button  >Send Data </button>
</form>
</div>
      </div>
    )
  }
}


export default Chat
