import React, { Component } from "react";
import { Carousel } from "antd";
import { user } from "./Header"
import '../css/bought.css'
import UserData from "../db/users.json";

export default class Orderd extends Component {
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
    console.log(bought())
          function bought() {
            console.log(people.data[find()].boughtProducts)
            if (people.data[find()].boughtProducts === undefined || people.data[find()].boughtProducts.length == 0) {
              return "-"
            } else return (people.data[find()].boughtProducts.map((product) => product))
        }
        return ( <div className="bbought">
            <Carousel className="saba"effect="scrollx" autoplay arrows={true}>
             {bought().map((product,index)=><div key={index} className="blud"><img src={product.url} ></img>
             <div className="chud">
           <h4>{product.brand}----</h4> 
           
           <h4>{product.model}----</h4> 
           <h4>{product.price}</h4></div>
             </div>)}
     
            </Carousel>
            </div>) 
}
      }
    }