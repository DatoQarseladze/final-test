import React from "react";

const Headphone = props => {
  let pth;
  let id;
  pth = window.location.pathname;  //gaxsnili fanjris urls igebs
  id = pth.substr(pth.lastIndexOf('/')+1); //ids amogebas vcdilob anu bolo ricxvis
  return (
    <div>
      {console.log(props.items)}
      <h1>{props.items[id].model}</h1> //props.items ari ukve sheni masivi sadac yursasmenebia da ubere exla :D 
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
