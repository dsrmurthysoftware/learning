import React from 'react';

export class Login extends React.Component{
	constructor(props){
		super(props);
		// Model binding
		this.state={
			data:{
				uname:"Murthy",
				email:"murthy@gmail.com",
				pw:"welcome"
			}
		}
		this.handleFormSubmit=this.handleFormSubmit.bind(this);
		this.handleChange=this.handleChange.bind(this);

	}
	handleFormSubmit(e){
		e.preventDefault();
		var uname=this.refs.uname.value;
		var email=this.refs.email.value;
		var pw=this.refs.pw.value;
		alert("Submitting: "+uname+" "+email+"  "+pw);
	}
	handleChange(e){
		this.setState(Object.assign(this.state.data,
			  {[e.target.name]:e.target.value}));
	}
	render(){
		return(
			<div className="row" style={{"marginTop":"15px"}}>
				<div className="col-md-4"></div>
				<form className="form-group col-md-4" 
				      onSubmit={this.handleFormSubmit}>
					<div>
						<label>username:</label>
						<input type="text" 
						          onChange={this.handleChange} 
						name="uname" ref="uname" 
						value={this.state.data.uname} 
						className="form-control"
						 placeholder="Enter username"/>
					</div>
					<div>
						<label>email:</label>
						<input type="text" onChange={this.handleChange}
						 name="email" ref="email" value={this.state.data.email}
						  className="form-control" 
						  placeholder="Enter email"/>
					</div>
					<div>
						<label>password:</label>
						<input type="password" 
						   onChange={this.handleChange} 
					    	name="pw" ref="pw" value={this.state.data.pw} 
							className="form-control" 
							placeholder="Enter password"/>
					</div>
					<div style={{"marginTop":"15px"}}>
						<input type="submit" value="login" 
						className="form-control btn btn-danger hollow"/>
					</div>
				</form>
				<div className="col-md-4"></div>
			</div>
		);
	}
}