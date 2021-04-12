import {
    LOGIN_INIT, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR, 
    SIGNUP_INIT,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR
} from '../actions'

let initialState = {
    loginInit : false
}

export const AuthReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_INIT:
            state.loginInit = true
            return  {...state}

        case LOGIN_SUCCESS:
                state.loginInit = false
                return  {
                    ...state,
                    user: action.payload
                }
        case LOGIN_ERROR:
            state.loginInit = false
            return  {
                ...state
            }
    
        default:
            return state
    }
}

let initialState1 = {
    signupInit : false
}

export const SignUpReducer = (state=initialState1, action) => {
    switch (action.type) {
        case SIGNUP_INIT:
            state.signupInit = true
            return  {...state}

        case SIGNUP_SUCCESS:
                state.signupInit = false
                return  {
                    ...state,
                    signup: action.payload
                }
        case SIGNUP_ERROR:
            state.signupInit = false
            return  {
                ...state
            }
    
        default:
            return state
    }
}

const init = {
    error: false,
    message: ""
}

export const ErrorReducer = (state=init, action) =>{
    const {error, type} = action
    switch (type) {
        case "ADD_ERROR":
            state.error = true
            state.message = error
            return state

        case "REMOVE_ERROR":
            state.error = false
            state.message = ""
            return state
    
        default:
            return state
    }
}
