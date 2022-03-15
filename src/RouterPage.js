import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Login from './component/auth/Login';
import Logout from './component/auth/Logout';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Home from './component/layout/Home';
import Product from './component/layout/Product';
import Products from './component/layout/Products';
import NotFound from './component/error/NotFound';
import Contact from './component/layout/Contact';

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Header />
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/contact' component={Contact} />
        <Route path='/products' component={Product} />
        <Route path='/logout' component={Logout} />
        <Route path='/notfound' component={NotFound} />
         <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
