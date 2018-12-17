import React from "react";
import { Link } from "react-router-dom";

export class Categories extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { isOpen: false };
  }
  // handleOpen = () => {
  //   this.setState({ isOpen: true });
  // };
  // handleClose = () => {
  //   this.setState({ isOpen: false });
  // };
  render() {
    return (
      <div
        className="categories_wrapper"
        className={this.props.className}
        // onMouseEnter={this.handleOpen}
        // onMouseLeave={this.handleClose}
        // open={this.state.isOpen}
      >
        <ul className="categories">
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
