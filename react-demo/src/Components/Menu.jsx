import React from "react";
import { Link } from 'react-router-dom';

export default ({ close }) => (
  <div className="menu">
    <ul>
    <Link to='/'><button type="button" className="get-back btn btn-dark">Get Back</button></Link>     
    <Link to='/support'><button type="button" className="get-back btn btn-dark">Support</button></Link>     
    <Link to='/categories'><button type="button" className="get-back btn btn-dark">Products</button></Link>     
    <Link to='/profile'><button type="button" className="get-back btn btn-dark">Profile</button></Link> 
    <Link to='/signup'><button type="button" className="get-back btn btn-dark">Register</button></Link>     

    
    </ul>
  </div>
);