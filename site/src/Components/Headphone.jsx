import React from "react";
// import Products from "../DB/products.json";
// import { Headphones } from "./Headphones";

export const Headphone = (props, { match }, params) => {
  const headphone = props.item.find(function(element) {
    // return element.model === params.headphoneId;
    return console.log(element.model);
    // return console.log(match.params);
  });
  //   console.log(params);
  return (
    <div>
      headphones
      {headphone}
    </div>
  );
};
