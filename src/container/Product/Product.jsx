import React, { Component, Fragment } from "react";
import CardProduct from "../CardProduct/CardProduct";
import './Product.css';

class Product extends Component{

    state = {
      order: 4,
      name: 'padhil'
    }

    handleCounterChange = (newValue) => {
    
      this.setState({
      order: newValue
    })
    }

   render() {

    return(
        <Fragment>
        <div className="header">
            <div className="logo">
                <img src= "pngegg.png"alt="" height="50" width="50"></img>
            </div>
            <div className="troley">
            <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt=""></img>
            <div className="count">{this.state.order}</div>
            </div>
        </div>
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}  />
        </Fragment>
 
        
        );
}
}

export default Product;