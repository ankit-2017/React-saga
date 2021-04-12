//define constants

export const LOGIN_INIT = 'LOGIN_INIT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'


export const SIGNUP_INIT = 'SIGNUP_INIT'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'


//actions
export const LoginInit = (data) => ({type: LOGIN_INIT, payload: data})
export const LoginSuccess = (args) => ({type : LOGIN_SUCCESS, payload: args})
export const LoginError = () => ({type : LOGIN_ERROR })


export const SignUpInit = (data) => ({type: SIGNUP_INIT, payload: data})
export const SignUpSuccess = (args) => ({type : SIGNUP_SUCCESS, payload: args})
export const SignUpError = () => ({type : SIGNUP_ERROR })