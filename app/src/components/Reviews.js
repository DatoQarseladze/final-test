import React from "react";
import user from "./image/user.jpg";

class Reviews extends React.Component {
  render() {
    return (
      <div className="reviews">
        <div className="review-title">
          <h1>Reviews</h1>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
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
                My first experience of buying product from here.. very
                comfortable, best quality...
              </p>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
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
                My first experience of buying product from here.. very
                comfortable, best quality...
              </p>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
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
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
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
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
