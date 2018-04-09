import React from 'react';
import {SearchBar} from './SearchBar';


export class Products extends React.Component{
	constructor(props,context){
		super(props,context);
		this.updateCartInfo=this.updateCartInfo.bind(this);
	}
	updateCartInfo(item){
		//updateCartInfo handler coming from parent (App.js)
		this.props.updateCartInfo(item)
	}
	renderProducts(item){
		var {id,name,price,rating}=item;
		return (
			<tr key={id} style={{"cursor":"pointer"}}>
				<td className="col-md-3">{id}</td>
				<td className="col-md-4">{name}</td>
				<td className="col-md-3">{price}</td>
				<td className="col-md-1">{rating}</td>
				<td className="col-md-1">
					<button type="button" 
					onClick={(e)=>{this.updateCartInfo(item)}}>+</button>
				</td>
			</tr>
		);
	}
	
	render(){
		return(
			<div className="row">
				<SearchBar />
				<h1 className="text-center">Products</h1>
				<div className="col-md-3"></div>
				<table className='col-md-6 table-hover table-bordered'>
					<thead>
						<tr>
							<th className="col-md-2">Product ID</th>
							<th className="col-md-4">Name</th>
							<th className="col-md-4">Price</th>
							<th className="col-md-2">Rating</th>
							<th className="col-md-2"></th>
						</tr>
					</thead>
					<tbody>
						{this.props.products.map((item)=>
							 this.renderProducts(item))}
					 </tbody>
				</table>
				<div className="col-md-3">
				<a href="#">Visit our  new Products</a>
				</div>
			</div>
		);
	}
}