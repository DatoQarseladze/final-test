import React from "react";

export const Phones = props => {
  return (
    <div className="phones">
      <div>
        {props.items.map(function(item) {
          return (
            <div className="item">
              <img src={item.url} alt={"item.model"} />
              <h1 className="item--brand">{item.brand}</h1>
              <h2 className="item--name">{item.model}</h2>
              <span className="item--price">{item.price}</span>
              <span className="item--desc">{item.desc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
