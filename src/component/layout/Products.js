import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

 class Products extends Component {
    gotoProductDetail =(path)=>{
        this.props.history.push(path)      
    }

  render() {
    return (
      <div>
        <h1>Products List</h1>
        <center>
            <ul>
                <li onClick={()=>this.gotoProductDetail('/product?productItem=iPhone')}>iPhone</li>
                <li onClick={()=>this.gotoProductDetail('/product?productItem=iPad')}>iPad</li>
                <li onClick={()=>this.gotoProductDetail('/product?productItem=iMac')}>iMac</li>
                <li onClick={()=>this.gotoProductDetail('/product?productItem=iWatch')}>iWatch</li>  

            </ul>
        </center>
       
      </div>
    );
  }
}
export default withRouter(Products)
