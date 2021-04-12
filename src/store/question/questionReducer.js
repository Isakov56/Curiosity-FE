import {FETCH_ALL_QUESTIONS_SUCCESS, FETCH_QESTION_REQUEST, FETCH_QUESTION_FAILURE, FETCH_CURRENT_USER_QUESTIONS_SUCCESS, FETCH_ONE_QUESTION} from './questionTypes'

const initialState = {
    loading: false,
    currentUserQuestions: [],
    allQuestions: [],
    getQuestion: null,
    error: ''
}

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QESTION_REQUEST: 
            return {
                ...state,
                loading: true
            }
            case FETCH_ALL_QUESTIONS_SUCCESS:
                return {
                    loading: false,
                    ...state,
                    allQuestions: action.payload,
                    error: ''
                }
            case FETCH_CURRENT_USER_QUESTIONS_SUCCESS:
                return {
                    loading: false,
                    ...state,
                    currentUserQuestions: action.payload,
                    error: ''
                }
            case FETCH_ONE_QUESTION:
                return {
                    loading: false,
                    ...state,
                    getQuestion: action.payload,
                    error: ''
                }
            case FETCH_QUESTION_FAILURE:
                return {
                    loading: false,
                    currentUserPosts: null,
                    allPosts: [],
                    error: action.payload
                }
        default: return state
    }
}

export default questionReducer