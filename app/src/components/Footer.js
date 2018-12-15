import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">

        <div className="map">
          <i className="fas fa-map-marker"></i>
          <br />
          STORE LOCATOR
        </div>

        <div className="instagram">
          <i className="fab fa-instagram"></i>
          <br />
          INSTAGRAM
        </div>

        <div className="youtube">
          <i className="fab fa-youtube"></i>
          <br />
          YOUTUBE
        </div>

        <div className="twitter">
          <i className="fab fa-twitter"></i>
          <br />
          TWITTER
        </div>

        <div className="facebook">
          <i className="fab fa-facebook-f"></i>
          <br />
          FACEBOOK
        </div>

      </div>
    );
  }
}

export default Footer;
