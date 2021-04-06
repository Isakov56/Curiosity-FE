import { FETCH_ALL_POSTS_SUCCESS, FETCH_CURRENT_USER_POSTS_SUCCESS, FETCH_POST_REQUEST, FETCH_POST_FAILURE, FETCH_CURRENT_POST} from './postTypes'

import axios from 'axios'

export const fetchPostRequest = () =>{
    return {
        type: FETCH_POST_REQUEST
    } 
}

export const fetchAllPostsSuccess = allPosts=>{
    return {
        type: FETCH_ALL_POSTS_SUCCESS,
        payload: allPosts
    }
}

export const fetchCurrentUserPostsSuccess =currentUserPosts=>{
    return {
        type: FETCH_CURRENT_USER_POSTS_SUCCESS,
        payload: currentUserPosts
    }
}

export const fetchCurrentPostSuccess =post=>{
    return {
        type: FETCH_CURRENT_POST,
        payload: post
    }
}

export const fetchPostFailure =error=>{
    return {
        type: FETCH_POST_FAILURE,
        payload: error
    }
}

export const fetchCurrentUserPosts = () => {
    return (dispatch) => {
      dispatch(fetchPostRequest())
      axios.get('http://localhost:3003/api/posts/all/me', {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(res => {
                const currentUserPosts = res.data
                dispatch(fetchCurrentUserPostsSuccess(currentUserPosts))
            })
            .catch(err => {
                dispatch(fetchPostFailure(err.message))
            })
    }
}
export const newPost = (data, handleClose, file) => {
    return (dispatch) => {
      dispatch(fetchPostRequest())
      axios.post('http://localhost:3003/api/posts/newPost', data, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            //.then(res => {dispatch(fetchCurrentUserPostsSuccess(res.data))})
            .then(res => { {file ? 
                axios.put(`http://localhost:3003/api/posts/${res.data._id}/editPostImg`, file, {
                    headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
                })
                .then(res => {dispatch(fetchCurrentUserPostsSuccess(res.data))}) : 
                axios.get(`http://localhost:3003/api/posts/all/me`, {
                    headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
                })
                .then(res => {dispatch(fetchCurrentUserPostsSuccess(res.data))})
            }
            }, 
            handleClose())
            .catch(err => {
            dispatch(fetchPostFailure(err.message))
            })
    }
}

export const addPostImage = (data, postId) => {
    return (dispatch) => {
    //console.log( postId, "hellllllllnnnnnnnnnnoooooooo gggggggggggggggggggggg")
      dispatch(fetchPostRequest())
      axios.put(`http://localhost:3003/api/posts/${postId}/editPostImg`, data, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then()
    }
}

export const handleLike = (postId) => {
    console.log( postId, "hellllskjjdkjfkjskfj")
    return (dispatch) => {
      //dispatch(fetchPostRequest())
      axios.post(`http://localhost:3003/api/posts/${postId}/like`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            
    }
}

export const deletePost = (postId) => {
    return (dispatch) => {
      dispatch(fetchPostRequest())
      axios.delete(`http://localhost:3003/api/posts/${postId}`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(
                axios.get('http://localhost:3003/api/posts/all/me', {
                    headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
                })
                .then(res => {
                    const allPosts = res.data
                    dispatch(fetchCurrentUserPostsSuccess(allPosts))
                })
            )
            .catch(err => {
                dispatch(fetchPostFailure(err.message))
            })
    }
}



