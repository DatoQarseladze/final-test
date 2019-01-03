import React from 'react';
import {Link} from 'react-router-dom';

const EmptyCarts = () =>{
    return (
<div className="empty--carts">
    <h3>You have nothing on Cart, please go back and add on cart item</h3>
    <Link to="/"><button className='empty-cart btn btn-dark'>Get back</button></Link>
</div>
    )
} 


export default EmptyCarts;