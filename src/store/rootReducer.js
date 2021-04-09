import { combineReducers } from 'redux'

import userReducer from './user/userReducer'
import postReducer from './post/postReducer'
import commentReducer from './comment/commentReducer'
import questionReducer from './question/questionReducer'
import answerReducer from './answer/answerReducer'

const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
    question: questionReducer,
    answer: answerReducer,
})

export default rootReducer