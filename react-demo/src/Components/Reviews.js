import React from "react";
import axios from "axios";

let user = process.env.PUBLIC_URL + "/img/user.jpg";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      users: [],
      current: "3"
    };
  }
  handleHover = e => {
    let index = this.state.users.indexOf(e.target.innerHTML);
    this.setState({ current: index });
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/getreviews")
      .then(res => {
        console.log(res.data);
        this.setState({ reviews: res.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000/getreviewsusers")
      .then(res => {
        console.log(res.data);
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="reviews">
        <div className="review-title">
          <h1>Reviews</h1>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>

        <div className="user__reviews--wrapper">
          <div className="user__review">
            <img src="https://cdn11.bigcommerce.com/s-r69yc54oxa/stencil/02b78300-c933-0136-1be6-571cceb148e7/e/9271ac60-e60f-0136-0124-77eb745dfa48/img/testimonial.png" />
            <p className="user__review-text">
              {this.state.reviews[this.state.current]}
            </p>
          </div>

          <div
            className="user__reviews--hoverable"
            onMouseOver={this.handleHover}
          >
            <div className="user__review--user">{this.state.users[3]}</div>
            <div className="user__review--user">{this.state.users[2]}</div>
            <div className="user__review--user">{this.state.users[1]}</div>
            <div className="user__review--user">{this.state.users[0]}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
