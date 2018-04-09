import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class  Greeting extends Component {
  render() {
    return (
      <h1> {this.props.name} - Welcome to React World</h1>
    );
  }
}
// Specifies the default values for props:
Greeting.defaultProps = {
  name: 'Murthy'
};
// make sure we have all the props
Greeting.PropTypes = {
  name: PropTypes.string.isRequired
}

