import React, {Component} from 'react'
import TextDisplay from './TextDisplay'

export default class TextInput extends Component{
	constructor(props){
		super(props)
		this.state={inputText:'Murthy'}
	}
	handleChange(event){
		//console.log('change detected')
		//console.log(this.state.inputText)  // To get state (use bind)
		//console.log(event.target.value);
		this.setState({
			inputText:event.target.value
		})
	}
	render(){
	return	(
		<div>
			<div>Enter Name</div>
			<input type="text" placeholder="Enter some name here"
			value={this.state.inputText}
			onChange={this.handleChange.bind(this)}
			/>
			<TextDisplay text={this.state.inputText}/>
		</div>
		)	
	}
}
