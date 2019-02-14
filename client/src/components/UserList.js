import React from 'react';

const UserList = props => {
    return(
        props.users.map(user => {
            return <h1>{user.name}</h1>
        })
    )
}

export default UserList