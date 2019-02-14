import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserCard = styled.div`
    margin: 25px 10px;
    a{
        padding: 15px;
        border: 1px solid lightgray;
        color: black;
        font-size: 1.7rem;
        text-decoration: none;
        transition: 0.2s;
        &:hover{
            box-shadow: 0px 3px 15px rgba(0,0,0,.25);
        }

    }
`;

const UserContainer = styled.div`
    width: 80%;
    margin: 0 auto; 
    display: flex;
    flex-wrap: wrap;
`;

const UserList = props => {
    return(
        <UserContainer>
            {props.users.map(user => {
                return <UserCard>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                </UserCard>
            })}
        </UserContainer>
    )
}

export default UserList