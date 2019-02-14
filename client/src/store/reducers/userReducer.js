import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from '../actions';

const initialState = {
    users: [],
    currentUserPosts: [],
    isFetchingUsers: false,
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
        default:
            return state;
    }
}