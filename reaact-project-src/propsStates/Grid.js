import React from 'react';

/**
 *Start component
 */
export default class Start extends React.Component
{
    /**
     * Render
     *
     * @returns {XML}
     */
    render()
    {
        // build the users list
        const users = [];
        for (let i=1; i<10; i++) {
            users.push({
                id: i,
                username: 'Murthy ' + i,
                job: 'Employee ' + i,
            });
        }

        // render
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
                    {users.map((user, index) => {
                        return(
                            <tr key={user.id}>
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
                    })}
                </tbody>
            </table>
        );
    }
}