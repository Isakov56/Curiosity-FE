import { FETCH_COMMENT_REQUEST, FETCH_COMMENT_FAILURE, FETCH_POST_COMMENTS_SUCCESS} from './commentTypes'

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
      axios.get(`${process.env.REACT_APP_BE_URL}/comments/${postId}`, {
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

export const addComment = (postId, commentContent) => {
    return (dispatch) => {
        dispatch(fetchCommentRequest())
        //console.log(commentContent, postId, "commmenenenrtttntnntmtmttcontent")
        axios.post(`${process.env.REACT_APP_BE_URL}/comments/${postId}/add`, commentContent, {
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

export const deleteComment = (postId, commentContent) => {
    return (dispatch) => {
        dispatch(fetchCommentRequest())
        //console.log(commentContent, postId, "commmenenenrtttntnntmtmttcontent")
        axios.post(`${process.env.REACT_APP_BE_URL}/comments/${postId}/add`, commentContent, {
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