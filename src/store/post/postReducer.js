import {FETCH_ALL_POSTS_SUCCESS, FETCH_CURRENT_USER_POSTS_SUCCESS, FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_CURRENT_POST} from './postTypes'

const initialState = {
    loading: false,
    allPosts: [],
    currentUserPosts: null,
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_ALL_POSTS_SUCCESS:
            return {
                loading: false,
                ...state,
                allPosts: action.payload,
                error: ''
            }
        case FETCH_CURRENT_USER_POSTS_SUCCESS:
            return {
                loading: false,
                ...state,
                currentUserPosts: action.payload,
                error: ''
            }
        case FETCH_POST_FAILURE:
            return {
                loading: false,
                currentUserPosts: null,
                allPosts: [],
                error: action.payload
            }
        case FETCH_CURRENT_POST:
            return {
                loading: false,
                ...state,
                currentPost: action.payload,
                error: ''
            }
        default: return state
    }
}

export default userReducer