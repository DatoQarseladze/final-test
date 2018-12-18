import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Categories extends Component {
  render() {
    return (
      <div className={`categories__wrapper ${this.props.className}`}>
        <ul className={`categories`}>
          <li className="categories--item">
            <Link to="/headphones">
              <img
                src="https://cdn11.bigcommerce.com/s-r69yc54oxa/images/stencil/500x659/products/85/214/Blue-Wireless-Rendering__84481.1508779455.jpg?c=2"
                alt="headphones"
              />
              <div className="categories--title">Headphones</div>
            </Link>
          </li>
          <li className="categories--item">
            <Link to="/phones">
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/nav-iPhoneXR-fall2018-42215.png"
                alt="phones"
              />
              <div className="categories--title">Phones</div>
            </Link>
          </li>
          <li className="categories--item">
            <Link to="/laptops">
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6296/6296001_sd.jpg;maxHeight=200;maxWidth=300"
                alt="laptops"
              />
              <div className="categories--title">Laptops</div>
            </Link>
          </li>
          <li className="categories--item">
            <Link to="/cameras">
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol-evn1124572-181209-56897.jpg;maxHeight=309;maxWidth=457"
                alt="cameras"
              />
              <div className="categories--title">Cameras</div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
