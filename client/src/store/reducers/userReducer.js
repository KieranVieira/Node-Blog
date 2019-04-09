import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USER_POSTS_START,
    FETCH_USER_POSTS_SUCCESS,
    FETCH_USER_POSTS_FAILURE
} from '../actions';

const initialState = {
    users: [],
    currentUserPosts: [],
    isFetchingUsers: false,
    isFetchingUsersPosts: false,
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_START:
            return{
                ...state,
                isFetchingUsers: true,
                error:''
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                users: action.payload,
                isFetchingUsers:false,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                isFetchingUsers: false,
                error: action.payload
            }
        case FETCH_USER_POSTS_START:
            return{
                ...state,
                currentUserPosts: [],
                isFetchingUsersPosts: true,
                error:''
            }
        case FETCH_USER_POSTS_SUCCESS:
            return{
                ...state,
                currentUserPosts: action.payload,
                isFetchingUsersPosts: false,
                error: ''
            }
        case FETCH_USER_POSTS_FAILURE:
            return{
                ...state,
                isFetchingUsersPosts: false,
                error: action.payload
            }
        default:
            return state;
    }
}