import React from "react";
import { Link } from "react-router-dom";

let id;
const handleClick = e => {
  id = e;
};
const template = props => (
  <div>
    <h1 className="category_heading">{props.header}</h1>
    <ul className={`categories ${props.header}`}>
      {props.items.map(item => {
        return (
          <li key={item.id} onClick={e => handleClick(item.id)}>
            <Link to={`/${props.link}/${item.id}`}>
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
);
export default template;
