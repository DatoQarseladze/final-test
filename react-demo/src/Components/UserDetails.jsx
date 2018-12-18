import React, { Component } from 'react'
import moment from 'moment'

const buttonStyle = {
  width: '50%',
  transform: 'translate(50%, 20%)'
}

const UserDetails = props => {
  let pth
  let id
  pth = window.location.pathname
  id = pth.substr(pth.lastIndexOf('/') + 1)
  let user = props.users[id]
  const editUser = user => {
    // e.preventDefault();
    // console.log(user.splice)
    console.log(user);
    // this.props.editUser(this.textInput.value);
  }
  return (
    <div>
      <form action=''>
        <div className='user--details'>
          <label>
            Username:
            <br />
            <input
              type='text'
              defaultValue={user.username}
            />
          </label>
        </div>

        <div className='user--details'>
          <label>
            Email:
            <br />
            <input type='text' defaultValue={user.email} />
          </label>
        </div>

        <div className='user--details'>
          <label>
            Name:
            <br />
            <input type='text' defaultValue={user.name} />
          </label>
        </div>

        <div className='btn--container'>
          <button
            style={buttonStyle}
            className='btn btn-danger'
            onClick={editUser(user)}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserDetails
