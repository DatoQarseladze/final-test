import Template from "../router/template";
import React from "react";

export const Headphones = props => {
  return (
    <div className="items__container">
      <h1 className="category__header headphones_header">headphones</h1>
      <Template
        className="headphones"
        header={"headphones"}
        linkTo={"headphone"}
      />
      ;
    </div>
  );
};
