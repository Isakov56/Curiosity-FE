import {FETCH_ANSWER_REQUEST, FETCH_QUESTION_ANSWERS_SUCCESS, FETCH_ANSWER_FAILURE, FETCH_USER_ANSWERS_SUCCESS, FETCH_ALL_ANSWERS} from './answerTypes'

const initialState = {
    loading: false,
    userAnswers: [],
    questionAnswers: [],
    allAnswers: [],
    error: 'nothing'
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ANSWER_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_ANSWER_FAILURE:
            return {
                loading: false,
                userAnswers: [],
                questionAnswers: [],
                error: action.payload
            }
        case FETCH_QUESTION_ANSWERS_SUCCESS:
            return {
                loading: false,
                ...state,
                questionAnswers: action.payload,
                error: ''
            }
        case FETCH_ALL_ANSWERS:
            return {
                loading: false,
                ...state,
                allAnswers: action.payload,
                error: ''
            }
        case FETCH_USER_ANSWERS_SUCCESS:
            return {
                loading: false,
                ...state,
                userAnswers: action.payload,
                error: ''
            }
        default: return state
    }
}

export default commentReducer