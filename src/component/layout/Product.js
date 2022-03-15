import React, { Component } from 'react';
import queryString from 'query-string';
export default class Product extends Component {
constructor(){
    super();
    this.state={
        product:''
    }
}

  componentDidMount(){ 
    //const qs= queryString.parse(this.props.location.search);
   
     const productName = this.props.match.params.productItem;
      this.setState({
          product:productName
      })
  
  }
  render() {
      const product = this.state;
    return (
      <div>
          <h1>Showing the Products details  for </h1>
        <center>
            :{product}
        </center>
      </div>
    );
  }
}
