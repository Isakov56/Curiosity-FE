import {FETCH_ANSWER_REQUEST, FETCH_QUESTION_ANSWERS_SUCCESS, FETCH_ANSWER_FAILURE, FETCH_USER_ANSWERS_SUCCESS} from './answerTypes'

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

export const fetchAnswerFailure =error=>{
    return {
        type: FETCH_ANSWER_FAILURE,
        payload: error
    }
}

export const fetchCurrentQuestionAnswers = (questionId) => {
    return (dispatch) => {
      dispatch(fetchAnswerRequest())
      axios.get(`http://localhost:3003/api/answers/${questionId}`, {
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

export const fetchCurrentUserAnswers = () => {
    return (dispatch) => {
        dispatch(fetchAnswerRequest())
        axios.get(`http://localhost:3003/api/answers/getAll/me`, {
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

export const addAnswer = (questionId, answerContent, handleClose) => {
    console.log('here iamamamamamamamam amam')
    return (dispatch) => {
      dispatch(fetchAnswerRequest())
      axios.post(`http://localhost:3003/api/answers/${questionId}/add`, answerContent, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(
                axios.get(`http://localhost:3003/api/answers/${questionId}`, {
                    headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
                })
                .then(res => {
                    const currentQuestionAnswers = res.data
                    dispatch(fetchQuestionAnswersSuccess(currentQuestionAnswers))
                })
                .catch(err => {
                    dispatch(fetchAnswerFailure(err.message))
                }), handleClose()
            )
            .catch(err => {
                dispatch(fetchAnswerFailure(err.message))
            })
    }
}