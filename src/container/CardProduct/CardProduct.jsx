import React, { Component } from "react";
import '../Product/Product.css'

class CardProduct extends Component{

    state = {
      order: 4,
      name: 'padhil'
    }
             handleCounterChange = (newValue) => {
            
              this.props.onCounterChange(newValue)
            }
            
    handlePlus = () => {
      this.setState({
    order: this.state.order + 1
    
    }, () => {
      this.handleCounterChange(this.state.order);
    })

    }  
    
    handleMinus = () => {
     
        if(this.state.order > 0) {
        
            this.setState({
                order: this.state.order - 1
                
                }, () => {
                
                this.handleCounterChange(this.state.order);
                });
        }
    }
   render() {

    return(
        <div className="card">
        <div className="img-thumb-prod">
            <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg" alt=""></img>
        </div>
        <p className="product-title">Daging Ayam berbumbu rasa original</p>
        <p className="product-price">Rp 50000</p>
        <div className="counter">
            <button className="sinus" onClick={this.handleMinus}>-</button>
            <input type="text" value={this.state.order}></input>
            <button className="plus" onClick={this.handlePlus}>+</button>
        </div>
        </div>
 
        
        );
}
}

export default CardProduct;