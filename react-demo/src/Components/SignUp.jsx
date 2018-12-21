import React, { Component } from 'react'
import Joi from 'joi-browser'
import Extension  from 'joi'

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
    balance: Joi.number().min(1).required()
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
    const {username, password, email, birthdate, balance, name,lastname} = this.state.account;
    console.log(username,'states username');
    const errors = this.validate()
    this.setState({ errors: errors || {} })
    console.group(errors, 'shecdomebi')
    if (errors === null) {
      axios.post('http://localhost:5000/register',{
        username: username,
        password: password,
        name: name,
        lastname: lastname,
        balance: balance,
        email: email,
        birthdate: birthdate,
      })
    .then(result => {
      console.log(result);
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
        <form
          onSubmit={this.handleSubmit}
        >
          <div className='form--registration'>
            <label>
              <input
                value={this.state.account.name}
                className='form--input'
                type='text'
                placeholder='name'
                onChange={this.handleChange}
                error={errors.name}
                name='name'
              />
              {errors.name && (
                <div className='alert alert-danger'>{errors.name}</div>
              )}
            </label>
            <label>
              <input
                value={this.state.account.lastname}
                className='form--input'
                onChange={this.handleChange}
                error={errors.lastname}
                type='text'
                placeholder='lastname'
                name='lastname'
              />
              {errors.lastname && (
                <div className='alert alert-danger'>{errors.lastname}</div>
              )}
            </label>
            <label>
              <input
                className='form--input'
                type='text'
                placeholder='username'
                value={this.state.account.username}
                onChange={this.handleChange}
                error={errors.username}
                name='username'
              />
              {errors.username && (
                <div className='alert alert-danger'>{errors.username}</div>
              )}
            </label>
            <label>
              <input
                className='form--input'
                value={this.state.account.password}
                onChange={this.handleChange}
                error={errors.password}
                type='password'
                placeholder='password'
                name='password'
              />
              {errors.password && (
                <div className='alert alert-danger'>{errors.password}</div>
              )}
            </label>
            <label>
              <input
                value={this.state.account.email}
                onChange={this.handleChange}
                className='form--input'
                error={errors.email}
                type='text'
                placeholder='email'
                name='email'
              />
              {errors.email && (
                <div className='alert alert-danger'>{errors.email}</div>
              )}
            </label>
            <label>
              <input
                value={this.state.account.birthdate}
                onChange={this.handleChange}
                error={errors.date}
                className='form--input'
                type='date'
                placeholder='birthdate'
                name='birthdate'
              />
              {errors.birthdate && (
                <div className='alert alert-danger'>{errors.birthdate}</div>
              )}
            </label>
            <label>
              <input
                value={this.state.account.balance}
                onChange={this.handleChange}
                error={errors.balance}
                className='form--input'
                type='number'
                placeholder='balance'
                name='balance'
              />
            </label>
          </div>
          <div className='registration--btn'>
            {/* disabled={this.validate()} */}
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
