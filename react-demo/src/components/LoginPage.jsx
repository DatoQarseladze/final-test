import React from 'react'
import { Redirect } from 'react-router-dom'




export default class LoginPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }

    this.OnSubmitHandler = this.OnSubmitHandler.bind(this)
    this.username = React.createRef()
    this.password = React.createRef()
  }

  OnSubmitHandler = e => {
    e.preventDefault()
    this.login(this.username.current.value, this.password.current.value)
  }

  login = (username, password) => {
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(result => {
        if (result.auth) {
          localStorage.setItem('authorized', JSON.stringify(result))
          this.setState({ isLoggedIn: true, message: '' })
        } else {
          this.setState({ message: 'Login or password is not Correct' })
        }
      })
      .catch(err => console.log(err))
  }

  render () {
    const { isLoggedIn } = this.state
    if (isLoggedIn) {
      console.log('shamovida')
      return <Redirect to={'/profile'} />
    } else {
      return (
        <form className='form form--login' onSubmit={this.OnSubmitHandler}>
          
          <div className='input--group'>
 
            <label>
              Username:
              <br />
              <input
                type='text'
                placeholder='Username'
                className='form--input'
                ref={this.username}
              />
            </label>
          </div>
          <div className='input--group'>
            <label>
              Password:
              <br />
              <input
                type='password'
                placeholder='Password'
                className='form--input'
                ref={this.password}
              />
            </label>
          </div>
          <div className='input--group'>
            <button className='btn  btn--login'>Login</button>
          </div>
        </form>
      )
    }
  }
}
