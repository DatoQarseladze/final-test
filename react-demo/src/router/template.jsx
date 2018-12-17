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
      .get(`${url}${this.props.items.header}`)
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
      <div className="items__container">
        <h1>{this.props.items.header}</h1>
        <ul className="items__wrapper">
          {this.state.data.map(item => {
            return (
              <li key={item.id} className="item">
                <Link to={`/${this.props.items.linkTo}/${item.id}`}>
                  <div className="item--div">
                    <img
                      src={item.url}
                      alt={`item.name`}
                      className="item--img"
                    />
                    <div className="item--spec">
                      <h2 className="item--brand">{item.brand}</h2>
                      <h3 className="item--name">{item.model}</h3>
                      <p className="item--price">{item.price}</p>
                    </div>
                    <button className="item--btn">Add To Cart</button>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Template;
