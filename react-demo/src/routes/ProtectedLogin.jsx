import React from 'react';
import { Redirect, Route } from 'react-router-dom'


export const ProtectedLogin = ({ component: Component, ...restProps }) => {
    return (
        <Route {...restProps}
            render={
                props => localStorage.getItem('admin') ?
                (<Redirect to={'/'} />) :
                (<Component {...props} />) 
            } 
            />
    )
}