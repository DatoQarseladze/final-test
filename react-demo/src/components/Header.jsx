import React from 'react'
import logo from './img/logo.jpg'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// import Products from '../DB/products.json'
// import { Headphones } from './Headphones'
// import { Phones } from './Phones'
// import { Categories } from './Categories'
// import HomePage from './HomePage'
import Login from './Login'

class Header extends React.Component {
  render () {
    return (
        <div className='header_wrapper'>
          <nav className='header' role='banner'>
            <img src={logo} alt='' />
            <div className='menu'>
              <div className='menuItem'>
              <Link to='/login'>EXPLORE</Link>

              </div>
              <div className='menuItem'>
                Support
              </div>
              <div className='menuItem'>
               Company
              </div>
            </div>

            <div className='nav'>
            <li>
            <Link to='/'><i className='fa fa-search'/></Link>
              </li>
              <li>
              <Link to='/login'><i className='fa fa-user'/></Link>
              </li>
              <li>
              <Link to='/search'><i className='fa fa-shopping-cart' /></Link>
              </li>
            </div>
          </nav>


          {/* <Route path='/login' component={Login} /> */}
          {/* <Route path='/search' exact render={() => <Categories />} /> */}
          {/* <Route path='/' exact component={HomePage} /> */}
          {/* <Switch> */}
          {/* <Route path='/categories' component={Login} /> */}
          {/* </Switch> */}

          {/* <Route
            exact
            path='/headphones'
            render={() => <Headphones items={Products.HEADPHONES} />}
          /> */}

          {/* <Route
            path='/phones'
            render={() => <Phones items={Products.PHONES} />}
          /> */}
        </div>
    )
  }
}

export default Header
