import React, { Component } from 'react'
import UserData from '.././db/users.json'

function searchingFor (term) {
  return function (x) {
    return x.username.toLowerCase().includes(term.toLowerCase()) || !term
  }
}

export default class UsersSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      people: UserData,
      term: ''
    }

    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler = e => {
    let variable = e.target.value
    this.setState({ term: variable })
  }
  deleteHandler = e => {
    this.setState(prevState => {
      const users = this.state.people
      const people = users.filter(user => user.username !== e)
      return { people }
    })
    // let users = this.state.people;
    // console.log(users);

    // if( index > -1){
    //     users.splice(user, 1)

    //     return index;
    // }
    // console.log(index);
    // this.setState({people: index})
    // {people.filter(searchingFor(this.state.term)).map(user => {
  }
  render () {
    const { people } = this.state
    return (
      <div className='search'>
        <form action=''>
          <input
            type='text'
            name='searchUsername'
            onChange={this.searchHandler}
          />
        </form>
        <table className='table'>
  
            <tr>
              <th  scope='col'>ID</th>
              <th  scope='col'>NAME</th>
              <th  scope='col'>LASTNAME</th>
              <th  scope='col'>USERNAME</th>
              <th  scope='col'>EMAIL</th>
              <th  scope='col'>BIRTHDATE</th>
              <th  scope='col'>BALANCE</th>
              <th  scope='col'>EDIT</th>
              <th  scope='col'>DELETE</th>
            </tr>
        </table>

        {people.filter(searchingFor(this.state.term)).map(user => {
          return (
            <tbody>
               
   
                <tr>
                  <th scope='row'>{user.id}</th>
                  <th>{user.name}</th>
                  <th>{user.lastname}</th>
                  <th>{user.username}</th>
                  <th>{user.email}</th>
                  <th>{user.birthdate}</th>
                  <th>{user.balance}</th>
                  <th>
                    <button className='btn btn-primary btn-sm m-2'>Edit</button>
                  </th>
                  <th>
                    <button className='btn btn-danger btn-sm m-2'>
                      Delete
                    </button>
                  </th>
                </tr>
        
            </tbody>
          )
        })}
      </div>
    )
  }
}
