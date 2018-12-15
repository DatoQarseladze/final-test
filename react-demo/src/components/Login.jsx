import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router-dom'

class Login extends Component {
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
          Swal({
            position: 'top-end',
            type: 'success',
            title: 'You have been signed in',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          this.setState(
            Swal({
              type: 'error',
              title: 'Oops...',
              text: 'Wrong user !',
              showConfirmButton: false,
              footer: '<a href="http://localhost:3000/login">Try again</a>'
            })
          )
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
        <div>
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
            <div className='input--group form--actions'>
              <button className='btn  btn--login'>Sign In</button>
              <a href="/login">Forgot your password?</a>
            </div>
          </form>
          <div>
          
          </div>
        </div>

      
      )
    }
  }
}

export default Login
