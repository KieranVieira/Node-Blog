import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUserPosts } from '../store/actions';

class SingleUserView extends React.Component{
    componentDidMount(){
        this.props.fetchUserPosts(this.props.match.params.id)
    }
    
    render(){
        return(
            <>
                <Link to="/">back</Link>
                {this.props.isFetchingUsersPosts ? 
                <h1>Loading Posts...</h1> : 
                <>
                    <h1>Posts:</h1>
                    {this.props.posts.length > 0 ? 
                    this.props.posts.map(post => {
                        return <h1>{post.text}</h1>
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