import React, {Component} from 'react'


export default class SignUp extends Component {

 render () {
  return (
    <div>
      <form
        action='http://localhost:5000/register'
        method='POST'
      >
        <div className='form--registration'>

        <label>
          <input
            className='form--input'
            type='text'
            placeholder='name'
            name='name'
            required
          />
        </label>
        <label>
          <input
            className='form--input'
            type='text'
            placeholder='lastname'
            name='lastname'
            required
          />
        </label>
        <label>
          <input
            className='form--input'
            type='text'
            placeholder='username'
            name='username'
            required
          />
        </label>
        <label>
          <input
            className='form--input'
            type='password'
            placeholder='password'
            name='password'
            required
          />
        </label>
        <label>
          <input
            className='form--input'

            type='text'
            placeholder='email'
            name='email'
            required
          />
        </label>
        <label>
          <input
            className='form--input'
  
            type='date'
            placeholder='birthdate'
            name='birthdate'
            required
          />
        </label>
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
        <div className='registration--btn'>
        <button 
        className='btn form--btn' 
        >Register</button>
        </div>

      </form>
    </div>
  )
 }
 
}
