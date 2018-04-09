import React from 'react'
export default class Login extends React.Component {
	constructor(props){
		super(props)
		this.state={ 
			form: { userName: 'Srirama', password: 'welcome'} 
		}
	}

onChange(event){
	this.state.form[event.target.name] = event.target.value;
	this.setState({form: this.state.form});
}

onSubmit(event) {
	event.preventDefault();
  alert(
   'Form submitted:'+ this.state.form.userName+' '+
		this.state.form.password);
  }
render(){
	var self = this;
	return (		
		<form className='demoForm' onSubmit={this.onSubmit.bind(this)}>
		<h3>Employee Form</h3>
		<TextBox name='userName'
			value={this.state.form.userName}
			onChange={this.onChange.bind(this)}/>
        <br/>
		<TextBox name='lastName'
			value={this.state.form.password}
			onChange={this.onChange.bind(this)}/>
       <br/>	
		<button className='btn btn-success'
			type='submit'>Login</button>
		</form>		
	);
  }
}

 class TextBox extends React.Component {
	render() {
		return (
			<input className='form-control'
				name={this.props.name}
				type='text'
				value={this.props.value}
				onChange={this.props.onChange}/>
		   );
		 }
	} 