import React from 'react';
import { Redirect } from 'react-router-dom'

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.OnSubmitHandler = this.OnSubmitHandler.bind(this);
        this.username = React.createRef();
        this.password = React.createRef();

        this.state = {
            isLogedIn: false,
            isLogedInUser: false
        }

    }
    OnSubmitHandler = (e) => {
        e.preventDefault();
        this.login(this.username.current.value, this.password.current.value);
    }
    login = (username, password) => {
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify({ username, password })    
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.auth) {
                    console.log('aeeuf');
                    localStorage.setItem('authorized', result.username)
                    this.props.showLogin(false);
                    // this.setState({ isLogedIn: true })
                }
                else if(result.userAuth){
                    console.log('hello');
                    localStorage.setItem('authorized', result.username)
                    this.props.showUserPage(true);
                    // this.setState({ isLogedInUser: true})
                } else {
                    localStorage.removeItem('authorized')
                }
            })
            .catch(err => console.log(err));
            
    }
    render() {
        const { isLogedIn, isLogedInUser } = this.state;
        if (isLogedIn) {
          console.log('shamovida')
            // return <Redirect to={'/profile'} />
      
        }
        else if(isLogedInUser){
            console.log('shemovida');
            // return <Redirect to={'/'}/>
        }
        else {
            return (
                <form className="form form--login" onSubmit={this.OnSubmitHandler}>
                    <div className="input--group">
                        <label>
                            Username:
                <br />
                            <input type="text" placeholder="Username" className="form--input" ref={this.username} />
                        </label>
                    </div>
                    <div className="input--group">
                        <label>
                            Password:
                <br />
                            <input type="password" placeholder="Password" className="form--input" ref={this.password} />
                        </label>
                    </div>
                    <div className="input--group">
                        <button className="btn  btn--login">Login</button>
                    </div>
                </form>
            )
        }

    }
}