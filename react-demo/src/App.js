import React, { Component } from 'react'
import AppRouter from './router/AppRouter'
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Redirect
// } from 'react-router-dom'
// import { ProtectedRoute } from './routes/ProtectedRoute'
// import Login from './components/Login'
// import { ProfilePage } from './components/ProfilePage'
// import { ContactPage } from './components/ContactPage'
// import { IndexPage } from './components/IndexPage'
// import Data from './db/data.json'
// import './App.css'
// import SignUp from './components/SignUp'
// import Table from './components/Table'
// import LogOut from './components/LogOut'
// import Header from './components/Header'

class App extends Component {
  // state = {
  //   showLogin: true
  // }

  render () {
    return (
      // <Router>
      
        <div className='App'>

        <AppRouter />
          {/* <ul className='menu'>
            <li className='menu--item'>
              <Link to='/'>Home</Link>
            </li>

            <li className='menu--item'>
              <Link to='/contact'>Contact</Link>
            </li>
            <li className='menu--item'>
              <Link to='/signup'>Sign Up</Link>
            </li>
            {this.state.showLogin && (
              <li className='menu--item'>
                <Link to='/login'>Login</Link>
              </li>
            )}

            {!this.state.showLogin && (
              <li className='menu--item'>
                <Link to='/search'>Search</Link>
              </li>
            )}

            {!this.state.showLogin && (
              <li className='menu--item'>
                <Link to='/profile'>Profile</Link>
              </li>
            )}
            {this.state.showLogin && (
              <li className='menu--item'>
                <Link to='/logout'>Log Out</Link>
              </li>
            )}
          </ul> */}
          {/* <Header />

          <Route path='/search' exact render={() => <Table />} />
          <Route
            path='/'
            exact
            render={() => (
              <IndexPage title={Data.index.title} desc={Data.index.desc} />
            )}
          />

          <Route
            path='/contact'
            render={() => (
              <ContactPage
                title={Data.contact.title}
                desc={Data.contact.desc}
              />
            )}
          />
          <Route path='/signup' render={() => <SignUp />} />
          <Route
            path='/login'
            render={() => (
              <Login
                showLogin={change => {
                  this.setState({ showLogin: change })
                }}
              />
            )}
          />
          <Route path='/logout' render={() => <LogOut /> } />

          <ProtectedRoute path='/search' component={ProfilePage} />
          {!this.state.showLogin && <Redirect to={'/login'} />}

          <ProtectedRoute path='/profile' component={ProfilePage} />
          {!this.state.showLogin && <Redirect to={'/login'} />} */}
        </div> 
      // </Router>
    )
  }
}

export default App
