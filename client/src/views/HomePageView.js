import React from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../store/actions';

import UserList from '../components/UserList';

class HomePageView extends React.Component{

    componentDidMount(){
        this.props.fetchUsers()
    }

    render(){
        return(
            <UserList users={this.props.users}/>
        )
    }
}

const mapStateToProps = state => {
    return{
        users: state.userReducer.users
    }
}

export default connect(
    mapStateToProps,
    {
        fetchUsers
    }
)(HomePageView)