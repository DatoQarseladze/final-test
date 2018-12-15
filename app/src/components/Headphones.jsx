import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Headphone } from "./Headphone";
import Products from "../DB/products.json";

export const Headphones = props => {
  return (
  
      <div>
        <h1 class="category_heading">Headphones</h1>
        <ul className="categories headphones">
          {props.items.map(function(item, id) {
            return (
              <li key={id}>
                <Link to={`/headphones/${item.brand}-${item.model}`}>
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
          <Route
            path={`/headphones/:headphoneId`}
            render={() => (
              <Headphone item={Products.HEADPHONES} key={"headphoneId"} />
            )}
          />
        </ul>
      </div>
    
  );
};
