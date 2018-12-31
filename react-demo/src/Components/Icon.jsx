import React, {Component} from 'react';
import axios from 'axios'


export default class About extends Component {
    constructor(props){
        super(props);

        this.state ={
            messages: [],
        }

    }

    componentDidMount() {
        console.log('shemovedit');
        axios
        .get('http://localhost:5000/getmessages')
        .then(res =>{
          let newMessages = res.data
          console.log(newMessages);
          this.setState({messages: newMessages})
        //   this.setState(prevState => ({
        //     messages: [...prevState.messages, newMessages]
        //   }))
        })
        .catch(err =>{
          console.log(err);
        })
        console.log(this.state.messages, 'abaa');
     
      }
    render(){
        const {messages} = this.state;
        return (
            <div className="index">
                <h1 className='index--title'>
                   {messages.map(message =>(
                       <h1>{message}</h1>
                   ))}
                </h1>
                <hr/>
                <p>
                    
                </p>
            </div>
        )
    }

}