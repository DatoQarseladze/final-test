import axios from "axios";
import React, { Component } from "react";

const url = "http://localhost:5000/";

let pth = window.location.pathname;
let id = pth.substr(pth.lastIndexOf("/") + 1);

class ItemTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios
      .get(`${url}${this.props.items.header}/${id}`)
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
      <form>
        <div className="clicked__item">
          <img src={this.state.data.url} className="clicked__item--img" />
          <h1 className="clicked__item--brand">{this.state.data.brand}</h1>
          <h2 className="clicked__item--model">{this.state.data.model}</h2>
          <span className="clicked__item--desc">{this.state.data.desc}</span>
          <span className="clicked__item--price">{this.state.data.price}</span>
          <button className="clicked__item--addto--cart">add to cart</button>
        </div>
      </form>
    );
  }
}

export default ItemTemplate;
