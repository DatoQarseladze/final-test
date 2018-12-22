import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__social">
          <div className="map footer__social--col">
            <i className="fa fa-map-marker" />
            <br />
            STORE LOCATOR
          </div>
          <div className="instagram footer__social--col">
            <i className="fab fa-instagram" />
            <br />
            INSTAGRAM
          </div>
          <div className="youtube footer__social--col">
            <i className="fab fa-youtube" />
            <br />
            YOUTUBE
          </div>
          <div className="twitter footer__social--col">
            <i className="fab fa-twitter" />
            <br />
            TWITTER
          </div>
          <div className="facebook footer__social--col">
            <i className="fab fa-facebook-f" />
            <br />
            FACEBOOK
          </div>
        </div>

        <div className="footer__bottom">
          <div className="columns">
            <div className="column1">
              <p>HEADPHONES</p>
              <p>EARPLUGS</p>
              <p>ACCESSORIES</p>
              <p>HOW DECIBULLZ WORK</p>
            </div>

            <div className="column2">
              <p>CUSTOMER SERVICE</p>
              <p>Support Portal</p>
              <p>Instructions</p>
              <p>Contact Us</p>
            </div>

            <div className="column3">
              <p>COMPANY</p>
              <p>Blog</p>
              <p>Our Story</p>
              <p>Terms & Conditions</p>
              <p>Press</p>
              <p>Resellers</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div className="column4">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
            <i className="fab fa-pinterest" />
            <i className="fab fa-google-plus-g" />
          </div>

          <p className="copyright">
            &copy; 2018 Decibullz LLC. All Rights Reserved. Designed & Developed
            by Maryam Kits, Saba Mamasakhlisi, Dato Karseladze, Mariam Bokeria.
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
