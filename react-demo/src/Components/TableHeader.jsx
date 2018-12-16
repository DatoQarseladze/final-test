import React, { Component } from 'react'

class TableHeader extends Component {
  render () {
    return (
      <thead>
          <tr>
        <th scope='col'>ID</th>
        <th scope='col'>NAME</th>
        <th scope='col'>LASTNAME</th>
        <th scope='col'>USERNAME</th>
        <th scope='col'>EMAIL</th>
        <th scope='col'>BIRTHDATE</th>
        <th scope='col'>BALANCE</th>
        <th scope='col'>EDIT</th>
        <th scope='col'>DELETE</th>
        </tr>
      </thead>
    )
  }
}

export default TableHeader
