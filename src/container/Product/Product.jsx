import React, { Component, Fragment } from "react";


class Product extends Component{

   render() {

    return(
        <Fragment>
        <div className="header">
            <div className="logo">
                <img src="" alt=""></img>
            </div>
            <div className="troley">
            <img src="" alt=""></img>
            <div className="count">3</div>
            </div>
               <div className="card">
            <div className="img-thumb-prod">
                <img src="" alt=""></img>
            </div>
            <p className="product-title">Rendang</p>
            <p className="product-price">Rp. 10.000</p>
            <p className="counter">
                <button className="minus">-</button>
                <input type="text" value={3}></input>
                <button className="plus">+</button>
            </p>
        </div>
        </Fragment>
 
        
        )
}
}

export default Product;