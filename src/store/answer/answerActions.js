import {FETCH_ANSWER_REQUEST, FETCH_QUESTION_ANSWERS_SUCCESS, FETCH_ANSWER_FAILURE, FETCH_USER_ANSWERS_SUCCESS, FETCH_ALL_ANSWERS} from './answerTypes'

import axios from 'axios'

export const fetchAnswerRequest = () =>{
    return {
        type: FETCH_ANSWER_REQUEST
    } 
}

export const fetchQuestionAnswersSuccess = questionAnswers=>{
    return {
        type: FETCH_QUESTION_ANSWERS_SUCCESS,
        payload: questionAnswers
    }
}

export const fetchUserAnswersSuccess = userAnswers=>{
    return {
        type: FETCH_USER_ANSWERS_SUCCESS,
        payload: userAnswers
    }
}

export const fetchAllAnswersSuccess = allAnswers=>{
    return {
        type: FETCH_ALL_ANSWERS,
        payload: allAnswers
    }
}

export const fetchAnswerFailure =error=>{
    return {
        type: FETCH_ANSWER_FAILURE,
        payload: error
    }
}

export const fetchCurrentQuestionAnswers = (questionId) => {
    return (dispatch) => {
      dispatch(fetchAnswerRequest())
      //`${process.env.DEPLOYED_BE_URL}/users/me`
      axios.get(`${process.env.REACT_APP_BE_URL}/answers/${questionId}`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(res => {
                const currentQuestionAnswers = res.data
                dispatch(fetchQuestionAnswersSuccess(currentQuestionAnswers))
            })
            .catch(err => {
                dispatch(fetchAnswerFailure(err.message))
            })
    }
}

export const fetchAllAnswers = () => {
    return (dispatch) => {
      dispatch(fetchAnswerRequest())
      axios.get(`${process.env.REACT_APP_BE_URL}/answers/get/all/answers`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(res => {
                const allAnswers = res.data
                dispatch(fetchAllAnswersSuccess(allAnswers))
            })
            .catch(err => {
                dispatch(fetchAnswerFailure(err.message))
            })
    }
}

export const fetchCurrentUserAnswers = () => {
    return (dispatch) => {
        dispatch(fetchAnswerRequest())
        axios.get(`${process.env.REACT_APP_BE_URL}/answers/getAll/me`, {
            headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
        })
        .then(res => {
            const currentUserAnswers = res.data
            dispatch(fetchUserAnswersSuccess(currentUserAnswers))
        })
        .catch(err => {
            dispatch(fetchAnswerFailure(err.message))
        })
    }
}

export const addAnswer = (questionId, answerContent, handleClose, file) => {
    console.log(file, 'myFiLLLLLLLLLLEee')
    return (dispatch) => {
      dispatch(fetchAnswerRequest())
      axios.post(`${process.env.REACT_APP_BE_URL}/answers/${questionId}/add`, answerContent, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(
                res => { 
                    {file ? 
                    axios.put(`${process.env.REACT_APP_BE_URL}/answers/${res.data._id}/editAnswerImage`, file, {
                        headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
                    })
                    .then(res => {dispatch(fetchQuestionAnswersSuccess(res.data))}) : 
                    axios.get(`${process.env.REACT_APP_BE_URL}/getAll/me`, {
                        headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
                    })
                    .then(res => {dispatch(fetchQuestionAnswersSuccess(res.data))
                    })
                }
                }, 
                handleClose()
            )
            .catch(err => {
                dispatch(fetchAnswerFailure(err.message))
            })
    }
}

// export const addAnswer = (questionId, answerContent, handleClose, file) => {
//     console.log(file, 'myFiLLLLLLLLLLEee')
//     return (dispatch) => {
//       dispatch(fetchAnswerRequest())
//       axios.post(`${process.env.REACT_APP_BE_URL}/answers/${questionId}/add`, answerContent, {
//         headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
//       })
//       .then(res => { 
//         if (file) {
//           axios.put(`${process.env.REACT_APP_BE_URL}/answers/${res.data._id}/editAnswerImage`, file, {
//             headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
//           })
//           .then(res => {
//             dispatch(fetchQuestionAnswersSuccess(res.data))
//           })
//           .catch(err => {
//             dispatch(fetchAnswerFailure(err.message))
//           })
//         } else {
//           axios.get(`${process.env.REACT_APP_BE_URL}/getAll/me`, {
//             headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
//           })
//           .then(res => {
//             dispatch(fetchQuestionAnswersSuccess(res.data))
//           })
//           .catch(err => {
//             dispatch(fetchAnswerFailure(err.message))
//           })
//         }
//       })
//       .catch(err => {
//         dispatch(fetchAnswerFailure(err.message))
//       })
//     }
//   }

export const deleteAnswer = (questionId, answerId) => {
    return (dispatch) => {
      dispatch(fetchAnswerRequest())
      axios.delete(`${process.env.REACT_APP_BE_URL}/answers/${questionId}/${answerId}`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(
                axios.get(`${process.env.REACT_APP_BE_URL}/answers/getAll/me`, {
                    headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
                })
                .then(res => {
                    const currentQuestionAnswers = res.data
                    dispatch(fetchQuestionAnswersSuccess(currentQuestionAnswers))
                })
                .catch(err => {
                    dispatch(fetchAnswerFailure(err.message))
                })
            )
            .catch(err => {
                dispatch(fetchAnswerFailure(err.message))
            })
    }
}