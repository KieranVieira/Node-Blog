import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { fetchUserPosts } from '../store/actions';

const PostHeader = styled.h1`
    text-align: center;
`;

const BackButton = styled.div`
    margin-top: 15px;
    a{
        padding: 10px 15px;
        color: black;
        text-decoration: none;
        border: 1px solid lightgray;
        transition: 0.2s;
        &:hover{
            background-color: black;
            color: white;
        }        
    }
`;

const Post = styled.h2`
    padding: 15px;
    border: 1px solid lightgray;
    color: black;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.2s;
    &:hover{
        box-shadow: 0px 3px 15px rgba(0,0,0,.25);
    }
`

class SingleUserView extends React.Component{
    componentDidMount(){
        this.props.fetchUserPosts(this.props.match.params.id)
    }
    
    render(){
        return(
            <>
                <BackButton><Link to="/">Home</Link></BackButton>
                {this.props.isFetchingUsersPosts ? 
                <PostHeader>Loading Posts...</PostHeader> : 
                <>
                    <PostHeader>Posts:</PostHeader>
                    {this.props.posts.length > 0 ? 
                    this.props.posts.map(post => {
                        return <Post>{post.text}</Post>
                    }):
                    <h1>This user has no posts</h1>}
                </>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return{
        isFetchingUsersPosts: state.userReducer.isFetchingUsersPosts,
        posts: state.userReducer.currentUserPosts
    }
}

export default connect(
    mapStateToProps,
    {
        fetchUserPosts 
    }
)(SingleUserView)