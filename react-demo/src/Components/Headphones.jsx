// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class Headphones extends Component {
//   render() {
//     return (
//       <div>
//         <h1 className="category_heading">Headphones</h1>
//         <ul className="categories headphones">
//           {this.props.items.map(item => {
//             return (
//               <li key={item.id}>
//                 <Link to={`/headphone/${item.id}`}>
//                   <div className="headphones--item">
//                     <img src={item.url} alt={`item.name`} />
//                     <div className="item-desc">
//                       <h1 className="item--brand">{item.brand}</h1>
//                       <h3 className="item--name">{item.model}</h3>
//                       <p className="item--price">{item.price}</p>
//                     </div>
//                     <button className="btn__addto--cart">Add To Cart</button>
//                   </div>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Headphones;

import Template from "../router/Template";
import React, { Component } from "react";

export const Headphones = props => {
  return <Template items={props} />;
};
