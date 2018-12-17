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
      <ul className="items-wraper">
        {this.state.data.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/${this.props.items.linkTo}/${item.id}`}>
                <div className="item">
                  <img src={item.url} alt={`item.name`} className="item--img" />
                  <div className="item--spec">
                    <h1 className="item--brand">{item.brand}</h1>
                    <h3 className="item--name">{item.model}</h3>
                    <p className="item--price">{item.price}</p>
                  </div>
                  <button className="btn__addto--cart">Add To Cart</button>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Template;
