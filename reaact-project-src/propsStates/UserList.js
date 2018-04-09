import React from 'react';
//npm install --save prop-types
import PropTypes from 'prop-types';
import UserListElement from './UserListElement';
export default class UserList extends React.Component
{    
    render()
    {
        return(
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Job</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.map((user, index) => {
                    return(
                        <UserListElement key={user.id} user={user}/>
                    );
                })}
                </tbody>
            </table>
        );
    }
}
UserList.defaultProps = {
    users: []
  };
// make sure we have all the props
UserList.PropTypes = {
    users: PropTypes.array.isRequired
}