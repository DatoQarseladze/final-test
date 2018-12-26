import React from "react";
import axios from 'axios'

let user = process.env.PUBLIC_URL + "/img/user.jpg";

class Reviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reviews : [],
      users: []
    }
 
  }
  componentDidMount (){
    axios
      .get('http://localhost:5000/getreviews')
      .then(res =>{
        console.log(res.data);
        this.setState({ reviews: res.data })
      })
      .catch(err =>{
        console.log(err);
      })


      axios
      .get('http://localhost:5000/getreviewsusers')
      .then(res =>{
        console.log(res.data);
        this.setState({ users: res.data })
      })
      .catch(err =>{
        console.log(err);
      })

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

        <div className="user-wrapper">
          <div className="user">
            <div className="user-photo">
              <img src={user} alt="" />
              <p className="user-info">
              {this.state.users[0]}
              </p>
            </div>
            <div className="user-review">
              <p className="review-text">
              {/* {this.state.reviews[0].text} */}
              {this.state.reviews[0]}

              </p>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>

          <div className="user2">
            <div className="user-photo">
              <img src={user} alt="" />
              <p className="user-info">
              {this.state.users[1]}
              </p>
            </div>
            <div className="user-review">
              <p className="review-text">
                {this.state.reviews[1]}
              </p>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>

          <div className="user3">
            <div className="user-photo">
              <img src={user} alt="" />
              <p className="user-info">
              {this.state.users[2]}
              </p>
            </div>
            <div className="user-review">
              <p className="review-text">
              {this.state.reviews[2]}

              </p>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>

          <div className="user4">
            <div className="user-photo">
              <img src={user} alt="" />
              <p className="user-info">
              {this.state.users[3]}
              </p>
            </div>
            <div className="user-review">
              <p className="review-text">
              {this.state.reviews[3]}

              </p>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
