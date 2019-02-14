import axios from 'axios';

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsers = () => dispatch => {
    dispatch({ type:FETCH_USERS_START })
    axios.get('https://kieran-node-blog-server.herokuapp.com/api/users')
        .then(res => dispatch({ type:FETCH_USERS_SUCCESS, payload:res.data }))
        .catch(err => dispatch({ type:FETCH_USERS_FAILURE, payload:err }))
}

export const FETCH_USER_POSTS_START = 'FETCH_USER_POSTS_START';
export const FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS';
export const FETCH_USER_POSTS_FAILURE = 'FETCH_USER_POSTS_FAILURE';

export const fetchUserPosts = userId => dispatch => {
    dispatch({ type:FETCH_USER_POSTS_START })
    axios.get(`https://kieran-node-blog-server.herokuapp.com/api/users/${userId}/posts`)
        .then(res => dispatch({ type:FETCH_USER_POSTS_SUCCESS, payload:res.data }))
        .catch(err => dispatch({ type:FETCH_USER_POSTS_FAILURE, payload:err }))
}