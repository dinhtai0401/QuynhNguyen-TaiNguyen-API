import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import constants from '../constants.json';

export default class PostDetail extends Component {

    render(){
        const productData = this.props.getProductInfo(parseInt(this.props.match.params.id));
        return(
            <div>
            <div>
                <button><Link to="/">Home</Link></button>
            </div>
                <div style={{paddingTop: 20}}>
                   <div>{productData.image.map(url => <img src={url} style={{width: "8%"}}></img>)}</div>
                   <div>{productData.title}</div>
                   <div>{productData.description}</div>
                   <div>{productData.category}</div>
                   <div>{productData.location}</div>
                   <div>{productData.price}</div>
                   <div>{productData.dataOfPosting}</div>
                   <div>{productData.delivery}</div>
                   <div>{productData.SellerOfName}</div>
                </div>
            </div>
        )
    }
}