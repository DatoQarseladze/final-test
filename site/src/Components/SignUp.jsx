import React, { Component } from 'react'
import Joi from 'joi-browser'
import '../css/registration.css'
import Swal from 'sweetalert2'
import axios from 'axios'

export default class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      account: {
        username: '',
        password: '',
        name: '',
        lastname: '',
        balance: '',
        birthdate: '',
        email: ''
      },
      errors: {}
    }
  }

  schema = {
    username: Joi.string()
      .required()
      .min(3)
      .label('Username'),
    password: Joi.string()
      .required()
      .min(3)
      .label('Password'),
    name: Joi.string()
      .required()
      .min(3)
      .label('Name'),
    lastname: Joi.string()
      .required()
      .min(3)
      .label('Lastname'),
    email: Joi.string().email({ minDomainAtoms: 2 }),
    birthdate: Joi.date().required(),
    balance: Joi.number()
      .min(1)
      .required()
  }
  validate = () => {
    const options = { abortEarly: false }
    const { error } = Joi.validate(this.state.account, this.schema, options)

    if (!error) return null

    const errors = {}
    for (let item of error.details) errors[item.path[0]] = item.message

    return errors
  }

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }

    const schema = { [name]: this.schema[name] }
    const { error } = Joi.validate(obj, schema)
    return error ? error.details[0].message : null
  }

  handleSubmit = e => {
    e.preventDefault()
    const {
      username,
      password,
      email,
      birthdate,
      balance,
      name,
      lastname
    } = this.state.account
    console.log(username, 'states username')
    const errors = this.validate()
    this.setState({ errors: errors || {} })
    console.group(errors, 'shecdomebi')
    if (errors === null) {
      axios
        .post('http://localhost:5000/register', {
          username: username,
          password: password,
          name: name,
          lastname: lastname,
          balance: balance,
          email: email,
          birthdate: birthdate
        })
        .then(result => {
          console.log(result)
          if(result.data === 'same'){
            Swal({
              type: 'error',
              title: 'Oops...',
              text: 'Same username!'
            })
          }
        })
        .catch(error => {
          this.setState({ errorMessage: error.response.data.message })
        })
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(input)
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    const account = { ...this.state.account }
    account[input.name] = input.value
    this.setState({ account, errors })
  }
  render () {
    const { errors } = this.state
    return (
      <div>
        <form className='registraion--form' onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>
            <div className='input--container'>
              <label className='signup--label' htmlFor='Name'>Name</label>
                <input
                  value={this.state.account.name}
                  className='floatLabel'
                  type='text'
                  onChange={this.handleChange}
                  error={errors.name}
                  name='name'
                />
                {errors.name && (
                  <div className='alert alert-danger'>{errors.name}</div>
                )}
            
            </div>
            <div className='input--container'>
              <label className='signup--label' htmlFor='Lastname'>Lastname</label>
                <input
                  value={this.state.account.lastname}
                  className='floatLabel'
                  onChange={this.handleChange}
                  error={errors.lastname}
                  type='text'
                  name='lastname'
                />
                {errors.lastname && (
                  <div className='alert alert-danger'>{errors.lastname}</div>
                )}
              
            </div>
            <div className='input--container'>
              <label className='signup--label' htmlFor='Username'>Username</label>
                <input
                  className='floatLabel'
                  type='text'
                  value={this.state.account.username}
                  onChange={this.handleChange}
                  error={errors.username}
                  name='username'
                />
                {errors.username && (
                  <div className='alert alert-danger'>{errors.username}</div>
                )}
            
            </div>
            <div className='input--container'>
              <label  className='signup--label' htmlFor='Password'>Password</label>
                <input
                  className='floatLabel'
                  value={this.state.account.password}
                  onChange={this.handleChange}
                  error={errors.password}
                  type='password'
                  name='password'
                />
                {errors.password && (
                  <div className='alert alert-danger'>{errors.password}</div>
                )}
          
            </div>
            <div className='input--container'>
              <label  className='signup--label' htmlFor='Password'>Email</label>
              <input
                  value={this.state.account.email}
                  onChange={this.handleChange}
                  className='floatLabel'
                  error={errors.email}
                  type='text'
                  name='email'
                />
                {errors.email && (
                  <div className='alert alert-danger'>{errors.email}</div>
                )}
            </div>
            <div className='input--container'>
            <label  className='signup--label' htmlFor='Birthdate'>Birthdate</label>
                <input
                  value={this.state.account.birthdate}
                  onChange={this.handleChange}
                  error={errors.date}
                  className='floatLabel'
                  type='date'
                  name='birthdate'
                />
                {errors.birthdate && (
                  <div className='alert alert-danger'>{errors.birthdate}</div>
                )}
            </div>
            <div className='input--container'>
            <label  className='signup--label' htmlFor='Balance'>Balance</label>
                <input
                  value={this.state.account.balance}
                  onChange={this.handleChange}
                  error={errors.balance}
                  className='floatLabel'
                  type='number'
                  name='balance'
                />
            </div>
          <div className='registration--btn'>
            <button className='btn form--btn'>Register</button>
          </div>
          {this.state.error && (
            <div className='alert alert-danger'>{this.state.error}</div>
          )}
        </form>
      </div>
    )
  }
}
