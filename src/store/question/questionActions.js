import { FETCH_ALL_QUESTIONS_SUCCESS, FETCH_QESTION_REQUEST, FETCH_QUESTION_FAILURE, FETCH_CURRENT_USER_QUESTIONS_SUCCESS, FETCH_ONE_QUESTION} from './questionTypes'

import axios from 'axios'

export const fetchQuestionRequest = () =>{
    return {
        type: FETCH_QESTION_REQUEST
    } 
}

export const fetchAllQuestionsSuccess = allQuestions=>{
    return {
        type: FETCH_ALL_QUESTIONS_SUCCESS,
        payload: allQuestions
    }
}

export const fetchOneQuestion = oneQuestion=>{
    return {
        type: FETCH_ONE_QUESTION,
        payload: oneQuestion
    }
}

export const fetchCurrentUserQuestionssSuccess =currentUserQuestions=>{
    return {
        type: FETCH_CURRENT_USER_QUESTIONS_SUCCESS,
        payload: currentUserQuestions
    }
}

export const fetchQuestionFailure =error=>{
    return {
        type: FETCH_QUESTION_FAILURE,
        payload: error
    }
}

export const fetchCurrentUserQuestions = () => {
    return (dispatch) => {
      dispatch(fetchQuestionRequest())
      axios.get(`${process.env.REACT_APP_BE_URL}/questions/all/me`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(res => {
                const currentUserQuestions = res.data
                dispatch(fetchCurrentUserQuestionssSuccess(currentUserQuestions))
            })
            .catch(err => {
                dispatch(fetchQuestionFailure(err.message))
            })
    }
}

export const getQuestion = (questionId) => {
    return (dispatch) => {
      dispatch(fetchQuestionRequest())
      axios.get(`${process.env.REACT_APP_BE_URL}/questions/${questionId}`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(res => {
                const oneQuestion = res.data
                dispatch(fetchOneQuestion(oneQuestion))
            })
            .catch(err => {
                dispatch(fetchQuestionFailure(err.message))
            })
    }
}

export const newQuestion = (data, handleClose) => {
    return (dispatch) => {
      dispatch(fetchQuestionRequest())
      axios.post(`${process.env.REACT_APP_BE_URL}/questions/newQuestion`, data, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            //.then(res => {dispatch(fetchCurrentUserPostsSuccess(res.data))})
            .then(res => {
                axios.get(`${process.env.REACT_APP_BE_URL}/questions/all/me`, {
                    headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
                })
                .then(res => {dispatch(fetchCurrentUserQuestionssSuccess(res.data))})
            },
            handleClose())
            .catch(err => {
            dispatch(fetchQuestionFailure(err.message))
            })
    }
}

export const deleteQuestion = (postId) => {
    return (dispatch) => {
      dispatch(fetchQuestionRequest())
      axios.delete(`${process.env.REACT_APP_BE_URL}/questions/${postId}`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(
                axios.get(`${process.env.REACT_APP_BE_URL}/questions/all/me`, {
                    headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
                })
                .then(res => {
                    const allQuestions = res.data
                    dispatch(fetchCurrentUserQuestionssSuccess(allQuestions))
                })
            )
            .catch(err => {
                dispatch(fetchQuestionFailure(err.message))
            })
    }
}


export const editQuestion = (questionId, modefiedData, handleClose, setNewQuestionState) => {
    return (dispatch) => {
      dispatch(fetchQuestionRequest())
      axios.put(`${process.env.REACT_APP_BE_URL}/questions/${questionId}`, modefiedData, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(res => {
                axios.get(`${process.env.REACT_APP_BE_URL}/questions/all/me`, {
                    headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
                })
                .then(res => {dispatch(fetchCurrentUserQuestionssSuccess(res.data))})
            },
            handleClose(), setNewQuestionState(null))
            .catch(err => {
                dispatch(fetchQuestionFailure(err.message))
            })
    }
}

export const fetchAllQuestions = () => {
    return (dispatch) => {
      dispatch(fetchQuestionRequest())
      axios.get(`${process.env.REACT_APP_BE_URL}/questions/all/me/questions`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('JWTToken')}`}
            })
            .then(res => {
                const currentUserQuestions = res.data
                dispatch(fetchAllQuestionsSuccess(currentUserQuestions))
            })
            .catch(err => {
                dispatch(fetchQuestionFailure(err.message))
            })
    }
}