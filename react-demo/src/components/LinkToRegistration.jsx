import React from 'react';
import {Link} from 'react-router-dom'

export const LinkToRegistration = () =>(
    <div className='registration--link'>
        <div className="registration--container">
        <div className='registration--title'>New Customer?</div>
        <p>Create an account with us and you'll be able to:</p>
        <ul>
            <li className="new--customer--fact">Check out faster</li>
            <li className="new--customer--fact">Save multiple shipping addresses</li>
            <li className="new--customer--fact">Access your order history</li>
            <li className="new--customer--fact">Track new orders</li>
            <li className="new--customer--fact">Save items to your wish list</li>
        </ul>
        <button className="btn btn--login"><Link to='/signup'>Create new Account</Link></button>
        </div>
    </div>
)