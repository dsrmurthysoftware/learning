import React, {Component} from 'react'

class TextDisplay extends Component{
	
	//Dumb Component
	render(){
		var myStyle = {
         fontSize: 14,
         color: 'rgb(217,83,79)'
      }
      	if(!this.props.text){
      		return <div></div>;
      	}
		return	( 
			<div style = {myStyle}>Searching for : {this.props.text}</div>
		)	
	}
}
export default TextDisplay