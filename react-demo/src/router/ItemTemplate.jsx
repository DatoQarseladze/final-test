import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Zoom from "react-img-zoom";

class ItemTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      user: "",
      text: "",
      imgheight: "",
      imgwidth: ""
    };
  }
  handleChange = e => {
    const username = localStorage.getItem("username");
    const review = e.target.value;
    this.setState({ user: username, text: review });
    console.log({ user: this.state.user, text: this.state.text });
  };
  handleSubmit = e => {
    e.preventDefault();

    const url = "http://localhost:5000/";
    let pth = window.location.pathname;
    let id = pth.substr(pth.lastIndexOf("/") + 1);

    axios
      .post(`${url}${this.props.header}/${id}`, {
        user: this.state.user,
        text: this.state.text
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };
  updateDimensions = () => {
    if (window.innerWidth < 1024 && window.innerWidth > 425) {
      this.setState({ imgwidth: 370, imgheight: 270 });
    } else if (window.innerWidth < 425) {
      this.setState({ imgwidth: 320, imgheight: 200 });
    } else {
      this.setState({ imgwidth: 400, imgheight: 450 });
    }

    // console.log(window.innerWidth, this.state.imgwidth);
  };

  componentDidMount() {
    // this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillMount() {
    this.updateDimensions();

    const url = "http://localhost:5000/";
    let pth = window.location.pathname;
    let id = pth.substr(pth.lastIndexOf("/") + 1);

    axios
      .get(`${url}${this.props.header}/${id}`)
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
    const greenColor = {
      color: "green"
    };
    const redColor = {
      color: "red"
    };
    return (
      <div className="clicked__item--wrapper">
        <div className="clicked__item">
          {this.state.data.url && (
            <div
              className="clicked__item--img"
              height={this.state.imgheight}
              width={this.state.imgwidth}
            >
              <Zoom
                // className="clicked__item--img"
                img={this.state.data.url}
                zoomScale={2}
                height={this.state.imgheight}
                width={this.state.imgwidth}
                transitionTime={0.5}
              />
            </div>
          )}
          <h1 className="clicked__item--brand">{this.state.data.brand}</h1>
          <h2 className="clicked__item--model">{this.state.data.model}</h2>
          <span className="clicked__item--price">{this.state.data.price}</span>
          {(this.state.data.quantity >= 5 && (
            <span className="clicked__item--quantity" style={greenColor}>
              In Stock
            </span>
          )) || (
            <span className="clicked__item--quantity" style={redColor}>
              Left: {this.state.data.quantity}
            </span>
          )}
          <span className="clicked__item--desc">{this.state.data.desc}</span>
          <button className="clicked__item--addto--cart">add to cart</button>
        </div>

        <div className="clicked__item--reviews">
          {(localStorage.getItem("username") && (
            <form onSubmit={this.handleSubmit}>
              <h2 name="user" className="clicked__item--username">
                User: {localStorage.getItem("username")}
              </h2>
              <div>
                <textarea
                  name="text"
                  type="text"
                  className="clicked__item--new--review"
                  onChange={this.handleChange}
                />
                <button className="clicked__item--btn--post">
                  Post Comment
                </button>
              </div>
            </form>
          )) || (
            <div className="register">
              <Link to="/signup">Register to leave a Comment</Link>
            </div>
          )}
          <div className="clicked__item--old-reviews">
            {this.state.data.reviews &&
              this.state.data.reviews.map(i => {
                return (
                  <div className="clicked__item--old-review">
                    <h1 className="clicked__item--username">{i.user}</h1>
                    <p className="clicked__item--review">{i.text}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}

export default ItemTemplate;
