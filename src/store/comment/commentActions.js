import { FETCH_COMMENT_REQUEST, FETCH_COMMENT_FAILURE, FETCH_POST_COMMENTS_SUCCESS} from './postTypes'

import axios from 'axios'

export const fetchCommentRequest = () =>{
    return {
        type: FETCH_COMMENT_REQUEST
    } 
}

export const fetchAllPostCommentsSuccess = postComments=>{
    return {
        type: FETCH_POST_COMMENTS_SUCCESS,
        payload: postComments
    }
}

export const fetchCommentFailure =error=>{
    return {
        type: FETCH_COMMENT_FAILURE,
        payload: error
    }
}

export const fetchCurrentPostComments = (postId) => {
    return (dispatch) => {
      dispatch(fetchCommentRequest())
      axios.get(`http://localhost:3003/api/comments/${postId}`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(res => {
                const currentPostComments = res.data
                dispatch(fetchAllPostCommentsSuccess(currentPostComments))
            })
            .catch(err => {
                dispatch(fetchCommentFailure(err.message))
            })
    }
}