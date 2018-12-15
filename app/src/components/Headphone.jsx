import React from "react";
// import Products from "../DB/products.json";
// import { Headphones } from "./Headphones";

export const Headphone = (props, { match }, params) => {
  var mod;
  const headphone = props.item.find(function(element) {
    // return element.model === params.headphoneId;
    // return console.log(match.params);
    console.log(params.headphoneId)
    mod = element.model;
  });
  //   console.log(params);
  return (
    <div>
     <p> Mariam </p>
    </div>
  );
};
