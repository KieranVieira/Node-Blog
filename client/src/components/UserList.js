import React from 'react';
import { Link } from 'react-router-dom';

const UserList = props => {
    return(
        props.users.map(user => {
            return <Link to={`/user/${user.id}`}>{user.name}</Link>
        })
    )
}

export default UserList