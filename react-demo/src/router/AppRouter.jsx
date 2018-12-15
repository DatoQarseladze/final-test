import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../routes/ProtectedRoute';
import SignUp from '../components/SignUp'
import Login from './../components/Login';
import Table from './../components/Table'
import Header from './../components/Header';
import LogOut from './../components/LogOut'
import { LinkToRegistration } from './../components/LinkToRegistration';



const login = () => (
    <div>
        <Header />
        <hr />
        <h1 className='login--title'>Sign in</h1>
        <div className='login--page'>
        <Login />
        <LinkToRegistration />  
        </div>
    </div>
)

const index = () => (
    <div className='App'>
        <Header />
    </div>
);

const admin = () => (
    <div className="App">
    <Table />
    </div>
)

const signup = () => (
    <div>
    <Header />
    <hr/>
    <h1 className='login--title' >New Account </h1>
    <SignUp />
    </div>
)

const logout = () => (
    <div>
        <LogOut />
    </div>
)

const AppRouter = () => (
    <BrowserRouter>
        <div className='App'>
            <Switch>
            <Route path="/" render={index} exact={true}/>
            <Route path='/signup' render={signup} />
            <Route path='/login' component={login}  />
            <ProtectedRoute path='/search' component={admin} />
            <Route path='/logout' component={logout} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
