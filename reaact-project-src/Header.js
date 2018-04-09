import React, { Component } from 'react';
import logo from '../assets/react.png';

export default class Header extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div >
          <img  src={ logo } alt='React logo' width="100" height="100" />
          <h1 className="bgblack">{this.props.company}</h1>          
       </div>
    );
  }
}
/*
If we do not pass company prop, default prop will be taken
*/
Header.defaultProps={
  company:"Murthy Infotek"
}
