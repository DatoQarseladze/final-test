import React from "react";
import UserData from "../db/users.json";
import LogOut from "./LogOut"
import {user} from "./Header"
import "../user.css"



export class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : UserData,
    }
    fetch('../db/users.json').then(response => {
      return response.json();
    }).then(people => {
      
      this.setState({people});
    }).catch(err => {
      console.log(err)
    });
  }
  render(){
    
    const people = this.state;
    console.log(user)
    if(user=="User Not Found") {
      return (
        <div>{user}</div>
      )
    } else {
function find () {
  for(let i = 0; i<people.data.length;i++){
    if(people.data[i].username == user) return i;
  }
}

    function bought(){
      console.log(people.data[find()].boughtProducts)
      if(people.data[find()].boughtProducts === undefined ||people.data[find()].boughtProducts.length == 0 ) {
          return "-"
      } else return (people.data[find()].boughtProducts.map((product)=>"/"+product.model+"/"))
    }
    function onCart(){
      if(people.data[find()].onCart===undefined||people.data[find()].onCart.length ===0){
        return '-'
      } else return people.data[find()].onCart
    }
    console.log(people.data)
  return (
    <div className="profile">
      <h1 className="profile--title"/>
        <h3>Username : {people.data[find()].username}</h3>
        <h3>Name : {people.data[find()].name}</h3>
        <h3>Lastname : {people.data[find()].lastname}</h3>
        <h3>Email: {people.data[find()].email}</h3>
        <h3>BirthDate : {people.data[find()].birthdate}</h3>
        <h3>Balance : {people.data[find()].balance}</h3>
        <h3>BoughtProducts : {bought()}</h3>
        {/* <h3>On Card : {onCart()}</h3> */}
      <LogOut/>
    </div>
  );
    }
  }
};
export default ProfilePage