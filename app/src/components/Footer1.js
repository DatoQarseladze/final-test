import React from 'react';

class Footer1 extends React.Component {
    render() {
        return (
            <footer className="footer1">

                <div className="column-content">
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
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-pinterest"></i>
                        <i className="fab fa-google-plus-g"></i>
                    </div>

                </div>

                <p className="copyright">
                    &copy; 2018 Decibullz LLC. All Rights Reserved. Designed & Developed by DigitlHaus.
                </p>

            </footer>
        )
    }
}

export default Footer1;