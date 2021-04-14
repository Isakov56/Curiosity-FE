import { FETCH_USER_REQUEST, FETCH_ALL_USERS_SUCCESS, FETCH_USER_FAILURE, FETCH_CURRENT_USER_SUCCESS } from './userTypes'

import axios from 'axios'

export const fetchUserRequest = () =>{
    return {
        type: FETCH_USER_REQUEST
    } 
}

export const fetchAllUsersSuccess =allUsers=>{
    return {
        type: FETCH_ALL_USERS_SUCCESS,
        payload: allUsers
    }
}

export const fetchCurrentUserSuccess =user=>{
    return {
        type: FETCH_CURRENT_USER_SUCCESS,
        payload: user
    }
}

export const fetchUserFailure =error=>{
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

// export const fetchUser = () =>{
//     //console.log("hellllllllnnnnnnnnnnoooooooo")
//     return (dispatch) =>{
//         console.log("hellllllllnnnnnnnnnnoooooooo")
//         dispatch(fetchUsersRequest())
//         console.log("hoooooolllllllllllllllooo")
//             console.log(localStorage.getItem('JWTToken'), "ffffffffffffffffffffffffkkkkkkkkkkkkkkkk")
//             axios.get('http://localhost:3003/users/me', {
//                 headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
//             })
//             .then(res => {
//                 const users = res.data
//                 dispatch(fetchUsersSuccess(users))
//             })
//             .catch(err => {
//                 dispatch(fetchUsersFailure(err.message))
//             })
//     }
// }

export const fetchCurrentUser = () => {
    return (dispatch) => {
        //console.log( "hellllllllnnnnnnnnnnoooooooo")
      dispatch(fetchUserRequest())
      axios.get(`${process.env.REACT_APP_BE_URL}/users/me`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(res => {
                const allUsers = res.data
                dispatch(fetchCurrentUserSuccess(allUsers))
            })
            .catch(err => {
                dispatch(fetchUserFailure(err.message))
            })
    }
}

export const fetchAllUsers = () => {
    return (dispatch) => {
        //console.log( "hellllllllnnnnnnnnnnoooooooo")
      dispatch(fetchUserRequest())
      axios.get(`${process.env.REACT_APP_BE_URL}/users/`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(res => {
                const users = res.data
                dispatch(fetchAllUsersSuccess(users))
            })
            .catch(err => {
                dispatch(fetchUserFailure(err.message))
            })
    }
}

export const editCurrentUserInfo = (userInfo, handleClose) => {
    return (dispatch) => {
        //console.log(localStorage.getItem('JWTToken'), "hellllllllnnnnnnnnnnoooooooo")
      dispatch(fetchUserRequest())
      let payload = { name: 'donnie', surname: 'donnie' };
      axios.put(`${process.env.REACT_APP_BE_URL}/users/me`, userInfo, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(res => {
                const user = res.data
                dispatch(fetchCurrentUserSuccess(user))
                handleClose()
            })
            .catch(err => {
                dispatch(fetchUserFailure(err.message))
            })
    }
}

export const editUserImg = (file) => {
    return (dispatch) => {
        //console.log(localStorage.getItem('JWTToken'), "hellllllllnnnnnnnnnnoooooooo")
      //dispatch(fetchUserRequest())
      axios.put(`${process.env.REACT_APP_BE_URL}/users/me/update/image`, file, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(res => {
                const user = res.data
                dispatch(fetchCurrentUserSuccess(user))
            })
            .catch(err => {
                dispatch(fetchUserFailure(err.message))
            })
    }
}


  

export const logInUser = () =>{
    return async (dispatch, email, password) =>{

    }
}