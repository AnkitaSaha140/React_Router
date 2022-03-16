import React, { Component } from 'react'

export default class Product extends Component {

    constructor() {
        super();
        this.state = {
            product: ''
        }
    }

    componentDidMount() {
        const productName = this.props.match.params.name;
        this.setState({
            product: productName
        });
    }

    render() {
        return (
            <center>
                Showing the product details for : { this.state.product }
            </center>
        )
    }
}
