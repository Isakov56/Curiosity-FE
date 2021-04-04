import { FETCH_USER_REQUEST, FETCH_ALL_USERS_SUCCESS, FETCH_USER_FAILURE, FETCH_CURRENT_USER_SUCCESS} from './userTypes'

const initialState = {
    loading: false,
    allUsers: [],
    currentUser: null,
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_ALL_USERS_SUCCESS:
            return {
                loading: false,
                ...state,
                allUsers: action.payload,
                error: ''
            }
        case FETCH_CURRENT_USER_SUCCESS:
            return {
                loading: false,
                ...state,
                currentUser: action.payload,
                error: ''
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                currentUser: null,
                allUsers: [],
                error: action.payload
            }
        default: return state
    }
}

export default userReducer