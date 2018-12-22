import React from "react";
import axios from 'axios'

let user = process.env.PUBLIC_URL + "/img/user.jpg";

class Reviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reviews : []
    }
 
  }
  componentDidMount (){
    axios
      .get('http://localhost:5000/getreviews')
      .then(res =>{
        console.log(res.data)
        this.setState({ reviews: res.data })
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
                userName userSurname, Ecommerce Consultant, userMail
              </p>
            </div>
            <div className="user-review">
              <p className="review-text">
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
                userName userSurname, Ecommerce Consultant, userMail
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
                userName userSurname, Ecommerce Consultant, userMail
              </p>
            </div>
            <div className="user-review">
              <p className="review-text">
                My first experience of buying product from here.. very
                comfortable, best quality...
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
                userName userSurname, Ecommerce Consultant, userMail
              </p>
            </div>
            <div className="user-review">
              <p className="review-text">
                My first experience of buying product from here.. very
                comfortable, best quality...
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
