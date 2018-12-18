import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const url = "http://localhost:5000/";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios
      .get(`${url}${this.props.header}`)
      .then(res => {
        this.setState(() => {
          return {
            data: res.data
          };
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <ul className="items__wrapper">
        {this.state.data.map(item => {
          return (
            <li key={item.id} className="item">
              <Link
                to={`/${this.props.linkTo}/${item.id}`}
                className={`item--div ${this.props.className}`}
              >
                <img src={item.url} alt={`item.name`} className="item--img" />
                <div className="item--spec">
                  <h2 className="item--brand">{item.brand}</h2>
                  <h4 className="item--name">{item.model}</h4>
                  <p className="item--price">{item.price}</p>
                </div>
                <button className="item--btn">Add To Cart</button>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Template;
