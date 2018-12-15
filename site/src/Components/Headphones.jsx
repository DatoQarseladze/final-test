import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import AppRouter from "../router/AppRouter";
import Products from "../DB/products.json";
import Headphone from "../Components/Headphone";
import AppRouter from "../router/AppRouter";

let id;
let currentItem;
class Headphones extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.items };

    this.handleClick.bind(this);
  }
  handleClick(e) {
    id = e;
    // console.log("from headphones", id);
  }
  render() {
    return (
      // <Router>
      <div>
        <h1 className="category_heading">Headphones</h1>
        <ul className="categories headphones">
          {this.props.items.map(item => {
            return (
              <li key={item.id} onClick={e => this.handleClick(item.id)}>
                <Link to={`/headphone/${item.id}`}>
                  <div className="headphones--item">
                    <img src={item.url} alt={`item.name`} />
                    <div className="item-desc">
                      <h1 className="item--brand">{item.brand}</h1>
                      <h3 className="item--name">{item.model}</h3>
                      <p className="item--price">{item.price}</p>
                    </div>
                    <button className="btn__addto--cart">Add To Cart</button>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      // {/* </Router> */}
    );
  }
}

export default Headphones;

// let mapped;

// class Headphones extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [props.items]
//     };
//   }
//   componentDidMount() {
//     axios.get("/headphones").then(response => {
//       this.setState(() => {
//         return {
//           products: response.data
//         };
//       });
//     });
//   }

//   render() {
//     <div>
//       <h1 className="category_heading">Headphones</h1>
//       <ul className="categories headphones">
//         {
//           (mapped = this.state.products.map(item => {
//             return (
//               <Router>
//                 <li>
//                   <Link to={`/headphones/${item.brand}-${item.model}`}>
//                     <div className="headphones--item">
//                       <img src={item.url} alt={`item.name`} />
//                       <div className="item-desc">
//                         <h1 className="item--brand">{item.brand}</h1>
//                         <h3 className="item--name">{item.model}</h3>
//                         <p className="item--price">{item.price}</p>
//                       </div>
//                       <button className="btn__addto--cart">Add To Cart</button>
//                     </div>
//                   </Link>
//                 </li>
//                 <Route
//                   path={`/headphones/:headphoneId`}
//                   render={() => (
//                     <Headphone
//                       brand={item.brand}
//                       model={item.model}
//                       price={item.price}
//                     />
//                   )}
//                 />
//               </Router>
//             );
//           }))
//         }
//       </ul>
//     </div>;
//     return mapped;
//   }
// }

// export default Headphones;
