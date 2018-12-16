import React from "react";

const Headphone = props => {
  let pth;
  let id;
  pth = window.location.pathname; //gaxsnili fanjris urls igebs
  id = pth.substr(pth.lastIndexOf("/") + 1); //ids amogebas vcdilob anu bolo ricxvis
  let item = props.items[id];
  return (
    <form>
      <div className="clicked__item">
        <img src={item.url} className="clicked__item--img" />
        <h1 className="clicked__item--brand">{item.brand}</h1>
        <h2 className="clicked__item--model">{item.model}</h2>
        <span className="clicked__item--price">{item.price}</span>
        <button className="clicked__item--addto--cart">add to cart</button>
      </div>
    </form>
  );
};

export default Headphone;

// import React, { Component } from "react";
// import axios from "axios";
// // import Products from "../DB/products.json";
// import { Headphones } from "./Headphones";

// export default class Headphone extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { headphones: props };
//     console.log(this.state.headphones);
//   }
//   componentDidMount() {
//     axios.get("/headphones").then(response => {
//       this.setState(() => {
//         return {
//           headphones: response.data
//         };
//       });
//     });
//   }
//   render() {
//     let mapped = this.state.headphones.map(item => {
//       return <div>product:{item}</div>;
//     });
//     return mapped;
//   }
// }
