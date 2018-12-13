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
          <i className="fa fa-instagram" />
          <br />
          INSTAGRAM
        </div>
        <div className="youtube">
          <i className="fa fa-youtube" />
          <br />
          YOUTUBE
        </div>
        <div className="twitter">
          <i className="fa fa-twitter" />
          <br />
          TWITTER
        </div>
        <div className="facebook">
          <i className="fa fa-facebook-f" />
          <br />
          FACEBOOK
        </div>
      </div>
    );
  }
}

export default Footer;
