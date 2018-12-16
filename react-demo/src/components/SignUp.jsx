import React, {Component} from 'react'


export default class SignUp extends Component {

 render () {
  return (
    <div>
      <form
        className='form'
        action='http://localhost:5000/register'
        method='POST'
      >
      <div className="form--registration">
        <div className='input--group input--registration'>
        <label>
        Name
          <input
            className='form--input'
            type='text'
            placeholder='name'
            name='name'
            required
          />
        </label>
        </div>
        <div className='input--group input--registration'>
        Password
        <label>
          <input
            className='form--input'
            type='text'
            placeholder='lastname'
            name='lastname'
            required
          />
        </label>
        </div>
        <div className='input--group input--registration '>
        Username
        <label>
          <input
            className='form--input'
            type='text'
            placeholder='username'
            name='username'
            required
          />
        </label>
        </div>
        <div className='input--group input--registration '>
        Password
        <label>
          <input
            className='form--input'
            type='password'
            placeholder='password'
            name='password'
            required
          />
        </label>
        </div>
        <div className='input--group input--registration '>
        Email
        <label>
          <input
            className='form--input'

            type='text'
            placeholder='email'
            name='email'
            required
          />
        </label>
        </div>
        <div className='input--group input--registration '>
        Birthdate
        <label>
          <input
            className='form--input'
  
            type='date'
            placeholder='birthdate'
            name='birthdate'
            required
          />
        </label>
        </div>
        <div className='input--group input--registration'>
        Balance
        <label>
          <input
            className='form--input'
            type='number'
            placeholder='balance'
          
            name='balance'
            required
          />
        </label>
        </div>
        </div>
        <div className="registration--btn">
        <button 
        className='btn form--btn btn--login'
        >Register</button>
        </div>
      </form>
   
    </div>
  )
 }
 
}
