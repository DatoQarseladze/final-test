import React, { Component } from 'react'
import ShowUsers from './ShowUsers'
import TableHeader from './TableHeader'
import SearchInput from './SearchInput'
import UserData from '../db/users.json'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' 



export function searchingFor(term) {
  return function (x) {
    return x.username.toLowerCase().includes(term.toLowerCase()) || !term
  }
}

export default  class Table extends Component {
  constructor (props) {
    super(props)
    this.state = {
      people: UserData,
      term: ''
    }

  }

  componentDidMount () {
    // console.log('shemovida')
  }
  componentDidUpdate(){
      // console.log('sheicvala');
  }
  searchHandler = e => {
    let variable = e.target.value
    this.setState({ term: variable })
  }
  onDelete = e =>{
    confirmAlert({
      title:'Delete User',
      message: 'Are u sure u want to delete User?',
      buttons:[
        {
          label: 'Yes',
          onClick: () => this.deleteUser(e)
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    })
  }

  deleteUser = e => {
    fetch(`http://localhost:5000/delete`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ e })
    })
    .then(res => res.json())
    .then(people => {
      this.setState({ people })
    })
    .catch(err => console.log(err));
  }
 
  render () {
    const { people, term } = this.state
    return (
      <div className='search'>
        <SearchInput searchHandler={this.searchHandler} />
        <table className='table'>
          <TableHeader />
          <ShowUsers 
          people={people} 
          term={term}
          onDelete={this.onDelete}
          />
    
        </table>
      </div>
    )
  }
}
