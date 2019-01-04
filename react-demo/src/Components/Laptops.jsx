import Template from "../router/Template";
import React from "react";

export const Laptops = props => {
  return (
    <div className="items__container">
      <h1 className="category__header laptops__header">laptops</h1>
      <Template className="laptops" header="laptops" />;
    </div>
  );
};
