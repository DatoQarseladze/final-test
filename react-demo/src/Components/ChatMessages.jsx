import React, { Component } from 'react';
import axios from 'axios'


export default class ChatMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }
    }

    componentDidMount() {
        console.log('shemovedit');
        axios
            .get('http://localhost:5000/getmessages')
            .then(res => {
                let newMessages = res.data
                this.setState({ messages: newMessages })
            })
            .catch(err => {
                console.log(err);
            })

    }
    render() {
        const { messages } = this.state;
        return (
            <div className="index">
                <table className="table table-hover table-info">
                    <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                    {messages.map(message => (
                        <tr key={message.id}>
                            <th>{message.id}</th>
                            <th>{message.email}</th>
                            <th>{message.message}</th>
                        </tr>
                    ))}
                    </tbody>

                </table>
            </div>
        )
    }

}