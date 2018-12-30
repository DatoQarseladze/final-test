import React, { Component } from 'react';
import {Redirect,Link} from 'react-router-dom';
import "../user.css"

class LogOutA extends Component {
    
    render() { 
      
        return (
            
          <Link to="/"><button onClick={ function(){ window.location.reload(); localStorage.removeItem('admin')}}
            className="danger"
            >LogOut </button>
            </Link> 
            
          );
    }
}

export default LogOutA;