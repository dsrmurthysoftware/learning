import React from 'react';

import {Login} from './Login';
import {Products} from './Products';
import {ShoppingCart} from './ShoppingCart';
export default class ShoppingApp extends React.Component {
   constructor(props){
      super(props);
      this.updateCartInfo=this.updateCartInfo.bind(this);
      this.removeCartItem=this.removeCartItem.bind(this);
      this.state={
         cart:[]
      };
   }
   updateCartInfo(item){
      var cartItem=Object.create(item);
       cartItem.cartItemId=Math.random();
      this.setState({cart:this.state.cart.concat(cartItem)});
   }
   removeCartItem(cartItemId){
      this.setState({cart:this.state.cart.filter((item)=>{
         if(item.cartItemId!==cartItemId){
            return item;
         }
         return false;
      })});
   }
   render() {
      return (
         <div className="row">
        
            <h1 className="text-center">Ecommerce  Shopping App</h1>
            <Login />

            <Products updateCartInfo={this.updateCartInfo} 
              products={this.props.products}/>
            <ShoppingCart removeCartItem={this.removeCartItem} 
              cartItems={this.state.cart}/>  
              
         </div>
      );
   }
}
