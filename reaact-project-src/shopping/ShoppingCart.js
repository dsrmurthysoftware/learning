import React from 'react';

export class ShoppingCart extends React.Component{
	renderCartItem(item){
      var {id,name,price,rating,cartItemId}=item;
      return (
		<tr key={cartItemId}>
			<td className="col-md-3">{id}</td>
			<td className="col-md-3">{name}</td>
			<td className="col-md-3">${price}</td>
			<td className="col-md-2">{rating}</td>
			<td className="col-md-1">
			<button type="button"
			 onClick={(e)=>{this.props.removeCartItem(cartItemId);}}>-</button></td>
		</tr>
      );
	}
	render(){
		return(
			<div className="row">
				<div className="col-md-3"></div>
				<div className="col-md-6">
					<h1 className="text-center">Shopping Cart</h1>
					<div id="cartContents">
						<table className='table-hover table-bordered'>
							<thead>
								<tr>
									<th className="col-md-2">Product&nbsp;ID</th>
									<th className="col-md-4">Name</th>
									<th className="col-md-4">Price</th>
									<th className="col-md-2">Rating</th>
								</tr>
							</thead>
							<tbody>
								{this.props.cartItems.map((item)=>{
									return this.renderCartItem(item);
								})}
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-md-3"></div>
			</div>
		);
	}
}