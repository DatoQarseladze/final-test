import React from "react";

const Headphone = props => {
  alert("wohoo");
  let item = props.item.find(item => item.id === props.id);
  return (
    <div>
      {console.log(props, "headphone props")}
      {console.log(item, "headphone item")}
      <p>brand: {item.brand}</p>
    </div>
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
