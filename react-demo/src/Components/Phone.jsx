import React from "react";

export const Phone = props => {
  let pth;
  let id;
  pth = window.location.pathname;
  id = pth.substr(pth.lastIndexOf("/") + 1);
  // let item = props.items[id];
  let item = props.items.find(item => item.id == id);
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

// export default Phone;
