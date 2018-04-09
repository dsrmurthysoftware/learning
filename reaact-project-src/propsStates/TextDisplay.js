import React, {Component} from 'react'

export default class TextDisplay extends Component{
	
	//Dumb Component
	render(){
		var myStyle = {
         fontSize: 20,
         color: '#FF0000'
      }
		return	( 			 
			<div style = {myStyle}>Welcome : {this.props.text}</div>
			)	
	}
}
