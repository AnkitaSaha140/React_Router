import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Products extends Component {

    goToDetails = (product) => {
        this.props.history.push(`/products/${product}`);
    }
    

    render() {
        return (
            <center>
                <ul>
                    <li onClick={() => this.goToDetails('iPhone')}>iPhone</li>
                    <li onClick={() => this.goToDetails('iPad')}>iPad</li>
                    <li onClick={() => this.goToDetails('iMac')}>iMac</li>
                    <li onClick={() => this.goToDetails('iWatch')}>iWatch</li>
                </ul>
            </center>
        )
    }
}

export default withRouter(Products);
