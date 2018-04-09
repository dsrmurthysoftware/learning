import React from 'react';
import UserList from './UserList';

/**
 * StateApp component
 */
export default class StateApp extends React.Component
{
   
    constructor(props)
    {
        super(props);

        // build the users list
        const users = [];
        for (let i=1; i<10; i++) {
            users.push({
                id: i,
                username: 'Murthy ' + i,
                job: 'Employee ' + i,
            });
        }

        // save the users in the state
        this.state = {
            users: users,
        };
    }
    render()
    {
        return(
            <UserList users={this.state.users}/>
        );
    }
}