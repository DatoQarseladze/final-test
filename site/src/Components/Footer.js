import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="map">
          <i className="fa fa-map-marker" />
          <br />
          STORE LOCATOR
        </div>
        <div className="instagram">
          <i className="fab fa-instagram" />
          <br />
          INSTAGRAM
        </div>
        <div className="youtube">
          <i className="fab fa-youtube" />
          <br />
          YOUTUBE
        </div>
        <div className="twitter">
          <i className="fab fa-twitter" />
          <br />
          TWITTER
        </div>
        <div className="facebook">
          <i className="fab fa-facebook-f" />
          <br />
          FACEBOOK
        </div>
      </div>
    );
  }
}

export default Footer;
