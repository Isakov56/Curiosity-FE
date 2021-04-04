import {FETCH_COMMENT_REQUEST, FETCH_COMMENT_FAILURE, FETCH_POST_COMMENTS_SUCCESS} from './postTypes'

const initialState = {
    loading: false,
    postComments: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENT_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_COMMENT_FAILURE:
            return {
                loading: false,
                postComments: action.payload,
                error: ''
            }
        case FETCH_POST_COMMENTS_SUCCESS:
            return {
                loading: false,
                postComments: [],
                error: action.payload
            }
        default: return state
    }
}

export default userReducer