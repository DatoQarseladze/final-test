import React, { Component } from 'react'
import { searchingFor } from './Table'
import moment from 'moment'

export default class ShowUsers extends Component {
  // constructor (props) {
  //   super(props)
  // }
  componentDidMount () {}

  render () {
    const { people, term, onDelete } = this.props

    return (
   
        <tbody>
          {people.filter(searchingFor(term)).map(user => (
            <tr key={user.id}>
              <th scope='row'>{user.id}</th>
              <th>{user.name}</th>
              <th>{user.lastname}</th>
              <th>{user.username}</th>
              <th>{user.email}</th>
              <th>{moment(user.birthdate).format('MMM Do YY')}</th>
              <th>{user.balance}$</th>
              <th>
                <button className='btn btn-primary btn-sm m-2'>Edit</button>
              </th>
              <th>
                <button
                  className='btn btn-danger btn-sm m-2'
                  onClick={() => onDelete(user.username)}>
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
    )
  }
}
