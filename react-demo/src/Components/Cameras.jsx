import Template from "../router/template";
import React from "react";

export const Cameras = props => {
  return (
    <div className="items__container">
      <h1 className="category__header cameras__header">cameras</h1>
      <Template className="cameras" header={"cameras"} linkTo={"camera"} />;
    </div>
  );
};
