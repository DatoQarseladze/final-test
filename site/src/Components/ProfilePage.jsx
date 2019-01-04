import React from "react";
import UserData from "../db/users.json";
import LogOut from "./LogOut"
import { user } from "./Header"
import {Route,Link} from 'react-router-dom'
import "../user.css"



export class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: UserData,
    }
    fetch('../db/users.json').then(response => {
      return response.json();
    }).then(people => {

      this.setState({ people });
    }).catch(err => {
      console.log(err)
    });
  }

  render() {

    const people = this.state;
    console.log(user)
    if (user == "User Not Found") {
      return (
        <div>{user}</div>
      )
    } else {
      function find() {
        for (let i = 0; i < people.data.length; i++) {
          if (people.data[i].username == user) return i;
        }
      }

      function bought() {
        console.log(people.data[find()].boughtProducts)
        if (people.data[find()].boughtProducts === undefined || people.data[find()].boughtProducts.length == 0) {
          return "-"
        } else return (people.data[find()].boughtProducts.map((product) => product.url ))
      }
      function onCart() {
        if (people.data[find()].onCart === undefined || people.data[find()].onCart.length === 0) {
          return '-'
        } else return people.data[find()].onCart
      }
      console.log(people.data[find()].boughtProducts.length)
      console.log(people.data[find()].reviews)
      console.log(window.location.pathname)
      console.log(bought())
      return (
        <div className="profile">
          <div className="profile-photo"><div className="cover-icon-cont"><img className="cover-icon" src="https://image.flaticon.com/icons/svg/145/145843.svg" alt="icon" /></div>
          <div className="profile-info">
          <div className="prof-icon-cont"><Link to="/ordered"><i className="fas fa-truck fa-3x"></i></Link><p>{people.data[find()].boughtProducts.length}</p></div>
          <div className="prof-icon-cont"><a href={"/cart"} target="_blank"><i className="fas fa-shopping-cart fa-3x"></i><p>{people.data[find()].onCart.length}</p></a></div>
          <div className="prof-icon-cont"><a href="https://oppa.paybox.ge/" target="_blank"><i className="fas fa-money-check-alt fa-3x" title="BALANCE"></i><p>{Math.ceil(people.data[find()].balance)}</p></a></div></div>
          </div>
          <div className="profile-second">
            <h3 className="profile-username"><i class="fas fa-user fa-2x"></i> {people.data[find()].username}</h3>
            <h3 className="profile-Name" > <i class="fas fa-signature fa-2x"></i> {people.data[find()].name} {people.data[find()].lastname}</h3>
            <h3 className="profile-email"><i class="far fa-envelope fa-2x"></i> {people.data[find()].email}</h3>
            <h3 className="profile-birthdate"><i class="fas fa-calendar-day fa-2x"></i> {people.data[find()].birthdate}</h3> 
            <h3><i class="fas fa-sign-out-alt fa-2x"></i><LogOut /></h3><div className="profile-footer"><i className="fas fa-edit fa-2x"></i></div></div>
            {/* <h3 className="profile-broudghtProducts">BoughtProducts : {bought()}</h3></div> */}
          {/* <h3>On Card : {onCart()}</h3> */}
        </div>
      );
    }
  }
};
export default ProfilePage