import React, { Component } from 'react';

class LogOut extends Component {
    Logout = () => {
        localStorage.removeItem('authorized');
    }
    render() { 
        return (
            <button 
            className="danger"
            onClick={this.Logout}
            >LogOut</button>
          );
    }
}
 
export default LogOut;