import React, { Component } from "react";
import ShowUsers from "./ShowUsers";
import TableHeader from "./TableHeader";
import SearchInput from "./SearchInput";
import UserData from "../db/users.json";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { paginate } from "./paginate";
import {Link} from 'react-router-dom';
import Pagination from "./pagination";
import LogOutA from "./LogOutA"
import '../css/messageIcon.css'
import axios from 'axios'

export function searchingFor(term) {
  return function(x) {
    return x.username.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}




const hStyle = {
  fontSize: "25px",
  textAlign: "center",
  color: "seagreen"
};

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSizePeople: UserData,
      people: UserData,
      term: "",
      input: "",
      pageSize: 0,
      currentPage: 1,
      perPage: 6,
      selected: 1,
      messages: ''
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/getmessages')
    .then(res =>{
      // console.log(res.data)
      let newMessages = res.data
      // console.log('gasagzavni', messages);
      this.setState({messages: newMessages})
 
    })
    .catch(err =>{
      console.log(err);
    })
    console.log(this.state.messages, 'abaa');
  
  }
  componentDidUpdate() {
    console.log('updatedan', this.state.messages.length);
  }

  handlePageClick = data => {
    this.setState({ currentPage: data });
  };

  getPagedData = () => {
    const { currentPage, people, perPage } = this.state;
    console.log(people);

    const xalxi = paginate(people, currentPage, perPage);
    console.log(xalxi);
    return { people: xalxi };
  };

  searchHandler = e => {
    let variable = e.target.value;
    this.setState({ term: variable });
  };
  onDelete = e => {
    confirmAlert({
      title: "Delete User",
      message: "Are u sure u want to delete User?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.deleteUser(e)
        },
        {
          label: "No",
          onClick: () => {}
        }
      ]
    });
  };

  deleteUser = e => {
    fetch(`http://localhost:5000/delete`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ e })
    })
      .then(res => res.json())
      .then(people => {
        this.setState({ people });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleEdit = id => {
    let newUsername = this.state.input;
    fetch(`http://localhost:5000/edit`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ newUsername, id })
    })
      .then(res => res.json())
      .then(UserData => {
        this.setState({ UserData });
      })
      .catch(err => console.log(err));
  };

  handleIcon = () =>{
    console.log('hello"');
  }

  onEdit = e => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="edit--input">
            <h1 style={hStyle}>Edit user!</h1>
            <h3 style={hStyle}>Change username</h3>
            <input
              type="text"
              defaultValue={e.username}
              onChange={this.handleChange}
            />
            <div className="edit--buttons">
              <button className="btn btn-danger m-2" onClick={onClose}>
                Close
              </button>
              <button
                className="btn btn-success m-2"
                onClick={() => {
                  this.handleEdit(e.id, e.username);
                  onClose();
                }}
              >
                Submit!
              </button>
            </div>
          </div>
        );
      }
    });
  };

  render() {
    const { people } = this.getPagedData();
    const { term , messages} = this.state;
    return (
      <div className="search">
        <SearchInput searchHandler={this.searchHandler} />
        <div className="messageicon">
        <Link to='/messages'><i  class="fas fa-3x fa-comments "></i></Link>
        <span className='messagesNumber'>{messages.length}</span>
        </div>
        {/* <button className='btn btn-primary'></button> */}
        <table className="table table-hover table-info">
          <TableHeader />
          <ShowUsers
            people={people}
            term={term}
            onEdit={this.onEdit}
            onDelete={this.onDelete}
          />
        </table>
        <Pagination
          itemsCount={this.state.pageSizePeople.length}
          currentPage={this.state.currentPage}
          pageSize={this.state.perPage}
          onPageChange={this.handlePageClick}
        />

        <LogOutA/>
      </div>
      
    );
  }
}
