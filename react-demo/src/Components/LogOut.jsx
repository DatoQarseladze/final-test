import React, { Component } from 'react';
import {Redirect,Link} from 'react-router-dom';
import "../user.css"

class LogOut extends Component {
    
    render() { 
      
        return (
            
          <Link to="/"><button onClick={ function(){ window.location.reload(); localStorage.removeItem('authorized')}}
            className="danger"
            >LogOut </button>
            </Link> 
            
          );
    }
}

export default LogOut;