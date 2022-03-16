import React, { Component } from 'react'
import { BrowserRouter as Router ,Route,Switch,Link } from 'react-router-dom';
import Login from './component/auth/Login';
import Logout from './component/auth/Logout';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Home from './component/layout/Home';
import Product from './component/layout/Product';
import Products from './component/layout/Products';
import NotFound from './component/error/NotFound';
import Contact from './component/layout/Contact';

export default class NewRouter extends Component {
  render() {
    return (
        <div>
        <Router>
        <>
        <nav>
            <li> <Link to="/home">Home</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>
            <li> <Link to="/products">Products</Link> </li> 
           <li> <Link to="/Login">Login</Link> </li>
         
        </nav>       

        </>
        <>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/home'>
            <Home />
            </Route>
            <Route path='/contact'>
            <Contact />
            </Route>
            <Route path='/products'>
            <Products />
            </Route>
            <Route path='/products:name'>
            <Product />
            </Route>
            <Route path='/login'>
            <Login />
            </Route>
        </Switch>
        </>
      </Router>
      </div>
    )
  }
}
