import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../routes/ProtectedRoute';
import SignUp from '../components/SignUp'
import Login from './../components/Login';
import Table from './../components/Table'
import Header from './../components/Header';




const login = () => (
    <div>
        <Header />
        <Login />
    </div>
)

const index = () => (
    <div className='App'>
        <Header />
        {/* <Login /> */}
    </div>
);


const AppRouter = () => (
    <BrowserRouter>
        <div className='App'>
            <Switch>
                <Route path="/" render={index} exact={true}/>
                <Route path='/login' component={login}  />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
