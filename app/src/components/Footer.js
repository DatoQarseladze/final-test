import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="map"><i className="fa fa-map-marker"></i><br/>STORE LOCATOR</div>
                <div className="instagram"><i className="fa fa-instagram"></i><br/>INSTAGRAM</div>
                <div className="youtube"><i className="fa fa-youtube"></i><br/>YOUTUBE</div>
                <div className="twitter"><i className="fa fa-twitter"></i><br/>TWITTER</div>
                <div className="facebook"><i className="fa fa-facebook-f"></i><br/>FACEBOOK</div>
            </div>
        )
    }
}

export default Footer;