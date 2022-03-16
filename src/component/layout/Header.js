import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
 class Header extends Component {
    onNavigationHandler =(path) =>{
        this.props.history.push(path)

    }
  render() {
    return (
      <div>
        Welcome to E-commerce WebSite
        <nav>
          <button onClick={()=>this.onNavigationHandler('./home')}>Home</button>
          <button onClick={()=>this.onNavigationHandler('./contact')}>Contact</button>
          <button onClick={()=>this.onNavigationHandler('./products')}>Products</button>
          <button onClick={()=>this.onNavigationHandler('./todos')}>Todos</button>

      </nav>
      </div>
    );
  }
}
export default withRouter(Header)