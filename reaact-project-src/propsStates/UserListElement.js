import React from 'react';
import PropTypes from 'prop-types';
export default class UserListElement extends React.Component
{
    render()
    {
        const user = this.props.user;
        return(
            <tr>
                <td>#{user.id}</td>
                <td>{user.username}</td>
                <td>{user.job}</td>
                <td>
                    <a href={'/user-edit/' + user.id}>
                        Edit
                    </a>
                </td>
                <td>
                    <button data-id={user.id}>Delete</button>
                </td>
            </tr>
        );
    }
}

// make sure we have all the props
UserListElement.PropTypes = {
    user: PropTypes.object.isRequired
}   

/*
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // You can declare that a prop is a specific JS type. By default, these
  // are all optional.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
*/